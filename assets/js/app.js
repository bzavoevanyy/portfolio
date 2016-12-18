/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _login = __webpack_require__(1);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _preloader = __webpack_require__(2);
	
	var _preloader2 = _interopRequireDefault(_preloader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ready = function ready() {
	  _preloader2.default.init();
	  _login2.default.init();
	};
	
	document.addEventListener('DOMContentLoaded', ready);
	
	// TODO add main menu
	// TODO add sidebar blog for small screens
	// TODO add slider
	// TODO somethings else :)

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var login = function () {
	  var loginPatttern = /^[a-z0-9_-]{3,16}$/;
	  var passwordPattern = /^[a-z0-9_-]{6,18}$/;
	  var loginTooltip = document.getElementById('login-tooltip');
	  var passwordTooltip = document.getElementById('password-tooltip');
	  var robotTooltip = document.getElementById('robot-tooltip');
	
	  var runFlip = function runFlip(flag) {
	    var container = document.querySelector('.flip-container').classList;
	    var loginButton = document.querySelector('#login');
	
	    if (!container.contains('rotate') && !flag) {
	      container.add('rotate');
	      loginButton.style.display = 'none';
	    } else {
	      container.remove('rotate');
	      loginButton.style.display = '';
	    }
	  };
	  var sendForm = function sendForm() {
	    var Form = function () {
	      function Form() {
	        _classCallCheck(this, Form);
	
	        this.login = document.getElementsByName('login')[0].value;
	        this.password = document.getElementsByName('password')[0].value;
	        this.robot = document.getElementsByName('robot')[0].checked;
	        var robotRadio = document.getElementsByName('robot-radio');
	
	        if (robotRadio[0].checked) {
	          this.robotRadio = robotRadio[0].value;
	        } else {
	          this.robotRadio = robotRadio[1].value;
	        }
	      }
	
	      _createClass(Form, [{
	        key: 'checkForm',
	        value: function checkForm() {
	
	          if (!this.robot) {
	            // Проверяем чекбокс "Я не робот"
	            robotTooltip.classList.add('show');
	            return false;
	          }
	          if (this.robotRadio === 'robot') {
	            // Проверяем radioButton "Я не робот"
	            robotTooltip.classList.add('show');
	            return false;
	          }
	          if (!loginPatttern.test(this.login)) {
	            // Проверяем поле "Логин"
	            loginTooltip.classList.add('show');
	            return false;
	          }
	          if (!passwordPattern.test(this.password)) {
	            // Проверяем поле "Пароль"
	            passwordTooltip.classList.add('show');
	            return false;
	          }
	          return true;
	        }
	      }]);
	
	      return Form;
	    }();
	
	    var data = new Form();
	    data.checkForm();
	    // TODO send object by AJAX
	  };
	  var checkInputs = function checkInputs(target) {
	
	    if (target.name === 'login') {
	      if (loginPatttern.test(target.value)) {
	        target.parentNode.classList.remove('error');
	        target.parentNode.classList.add('noterror');
	        if (loginTooltip.classList.contains('show')) {
	          loginTooltip.classList.remove('show');
	        }
	      } else {
	        target.parentNode.classList.add('error');
	        target.parentNode.classList.remove('noterror');
	      }
	    }
	    if (target.name === 'password') {
	      if (passwordPattern.test(target.value)) {
	        target.parentNode.classList.remove('error');
	        target.parentNode.classList.add('noterror');
	        if (passwordTooltip.classList.contains('show')) {
	          passwordTooltip.classList.remove('show');
	        }
	      } else {
	        target.parentNode.classList.add('error');
	        target.parentNode.classList.remove('noterror');
	      }
	    }
	  };
	  var listener = function listener() {
	    document.body.addEventListener('click', function (e) {
	
	      if (e.target.name === 'robot' || e.target.name === 'robot-radio') {
	        if (robotTooltip.classList.contains('show')) {
	          robotTooltip.classList.remove('show');
	        }
	      }
	
	      switch (e.target.id) {
	        case 'login':
	          e.preventDefault();
	          runFlip();
	          break;
	        case 'index':
	          e.preventDefault();
	          runFlip();
	          break;
	        case 'enter':
	          e.preventDefault();
	          sendForm();
	          break;
	        case 'header-wrapper':
	          runFlip(true);
	          break;
	        case 'dark-block':
	          runFlip(true);
	          break;
	      }
	    });
	
	    document.body.addEventListener('keyup', function (e) {
	
	      switch (e.target.name) {
	        case 'login':
	          checkInputs(e.target);
	          break;
	        case 'password':
	          checkInputs(e.target);
	          break;
	      }
	    });
	  };
	
	  return {
	    init: function init() {
	      listener();
	    }
	  };
	}();
	
	module.exports = login;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var preloader = function () {
	
	  var getImgPaths = function getImgPaths() {
	    var paths = [];
	    var img = document.body.getElementsByTagName('*');
	    img = Array.prototype.slice.call(img);
	    img.map(function (val) {
	      if (val.tagName === 'IMG') {
	        paths.push(val.attributes.src.value);
	      } else {
	        var style = getComputedStyle(val);
	        if (style.backgroundImage.search(/url/) !== -1) {
	          paths.push(style.backgroundImage.replace('url("', '').replace('")', ''));
	        }
	      }
	    });
	    return paths;
	  };
	
	  var loadImg = function loadImg() {
	    var paths = getImgPaths();
	    var percent = 0;
	    var setPersent = function setPersent() {
	      var preloader = document.querySelector('.preloader');
	      percent += 100 / paths.length;
	      document.getElementById('preloader_text').innerHTML = Math.round(percent) + '%';
	      if (Math.round(percent) >= 100) {
	        preloader.classList.add('preloader--close');
	        setTimeout(function () {
	          preloader.style.display = 'none';
	        }, 1000);
	      }
	    };
	    paths.map(function (val) {
	      var fakeImg = document.createElement('IMG');
	      fakeImg.setAttribute('src', val);
	      fakeImg.addEventListener('load', function () {
	        setPersent();
	      });
	      fakeImg.addEventListener('error', function () {
	        fakeImg.removeEventListener('load', function () {});
	        setPersent();
	      });
	    });
	  };
	  return {
	    init: function init() {
	      loadImg();
	    }
	  };
	}();
	
	module.exports = preloader;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map