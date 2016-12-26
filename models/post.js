'use strict';
let mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

let Post = mongoose.model('Post', {title: String, date:String, content:String});


module.exports = Post;