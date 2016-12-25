'use strict';

import login from './index/login';
import preloader from './preloader/preloader';
import works from './works/works';
import about from './about/about';
import blog from './blog/blog';

let ready = () => {
  preloader.init();
  login.init();
  works.init();
  about.init();
  blog.init();
};

document.addEventListener('DOMContentLoaded', ready);

// TODO add main menu
// TODO add sidebar blog for small screens
// TODO add slider
// TODO somethings else :)