'use strict';

import login from './index/login';
import preloader from './preloader/preloader';


let ready = () => {
  preloader.init();
  login.init();
};

document.addEventListener('DOMContentLoaded', ready);

// TODO add main menu
// TODO add sidebar blog for small screens
// TODO add slider
// TODO somethings else :)