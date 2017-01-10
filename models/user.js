'use strict';
let mongoose = require('mongoose');

let User = mongoose.model('User', {
  "name" : String,
  "password" : String
});


module.exports = User;