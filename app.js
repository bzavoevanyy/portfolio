'use strict';
let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser'); // Для парсинга кук
let bodyParser = require('body-parser');
let passport = require('passport'); // сам passport js
let LocalStrategy = require('passport-local').Strategy; // Локальная стратегия, пользователь хранится в базе
let admin = require('./server/routes/admin');
let mongoose = require('mongoose');
let session = require('express-session'); // Для работы сессий
let MongoStore = require('connect-mongo')(session); // Хранение сессий в MongoDb
let User = require('./models/user');
let app = express();
mongoose.connect('mongodb://localhost/test2');

// Следующие два метода подготовки данных при чтении и записи в MongoStore
passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id).then((user) => {
    done(null, user);
  })
});

// Сама локальная стратегия - ищет пользователя в базе и проверяет его пароль (пароль не шифруется)
passport.use('localUser', new LocalStrategy((username, password, done) => {
  User.find({"name" : username}).then((user) => {

    if (username === user[0].name && password === user[0].password) {
      return done(null, user[0]);
    } else {
      return done(null, false);
    }
  });
}));



app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser()); // подключаем парсер кук

app.use(express.static(path.join(__dirname, 'build')));

// устанавливаем параметры сессии - настрои позже
app.use(session({
  secret: 'secret',
  key: 'keys',
  cookie: {
    path: '/',
    httpOnly: false,
    maxAge: 60*60*1000
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
// иницилизируем модуль сессий и passport js
app.use(passport.initialize());
app.use(passport.session());

app.use('/admin', admin);

// следующий маршрут удаляет сессию
app.get('/del', (req, res) => {
  req.session.destroy();
  res.json({status: 'Сессия удалена'});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
