let express = require('express');
let router = express.Router();
let passport = require('passport');
let mongoose = require('mongoose');
let Skills = require('../../models/skills');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("Авторизируйтесь");
}

router
  .get('/', isLoggedIn, function (req, res, next) {
    res.render('admin');
  })
  .post('/', function (req, res, next) {
    passport.authenticate('localUser', (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({status: 'Укажите логин и пароль!'})
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json({redirect: '/admin'});
      });

    })(req, res, next);

  })
  .post('/skills/get', (req, res, next) => {
    Skills.find().then((data) => {
      res.send(data);
    }).catch((err) => {
      next(err);
    })
  })
  .post('/skills', isLoggedIn, (req, res, next) => {

    Skills.find((err,doc) => {
      if (err) next(err);
      if (doc[0]) {
        for (let key in req.body) {
          if (req.body[key] && req.body[key] >= 0 && req.body[key] <= 100) {
            doc[0][key] = req.body[key];
          }
        }
        doc[0].save((err) => {
          if (err) next(err);
          res.json({"status": "200"})
        });
      } else {
        let skills = new Skills(req.body);
        skills.save((err) => {
          if (err) next(err);
          res.json({"status": "200"})
        })
      }
    });
  });

module.exports = router;
