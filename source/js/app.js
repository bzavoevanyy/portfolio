'use strict';
import {styles} from './gmaps/map_style';
import initMap from './gmaps/initMap';
import * as efect from './webgl_paralax/index-water'
window.initMap = initMap;
window.styles = styles;
import login from './index/login';
let ready = () => {
  login.init();
};

document.addEventListener('DOMContentLoaded', ready);