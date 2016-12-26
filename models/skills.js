'use strict';
let mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

let Skills = mongoose.model('Skills', {html:String,css:String,javascript:String,php:String,mysql:String,nodejs:String,laravel:String,git:String,gulp:String,webpack:String});


module.exports = Skills;