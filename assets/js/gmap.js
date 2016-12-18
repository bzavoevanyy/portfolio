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
	
	var _map_style = __webpack_require__(3);
	
	var _initMap = __webpack_require__(4);
	
	var _initMap2 = _interopRequireDefault(_initMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.initMap = _initMap2.default;
	window.styles = _map_style.styles;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var styles = exports.styles = [{
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#f5f5f5"
	  }]
	}, {
	  "elementType": "labels.icon",
	  "stylers": [{
	    "visibility": "off"
	  }]
	}, {
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#616161"
	  }]
	}, {
	  "elementType": "labels.text.stroke",
	  "stylers": [{
	    "color": "#f5f5f5"
	  }]
	}, {
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#bdbdbd"
	  }]
	}, {
	  "featureType": "poi",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#eeeeee"
	  }]
	}, {
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#757575"
	  }]
	}, {
	  "featureType": "poi.park",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#e5e5e5"
	  }]
	}, {
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#9e9e9e"
	  }]
	}, {
	  "featureType": "road",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#ffffff"
	  }]
	}, {
	  "featureType": "road.arterial",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#757575"
	  }]
	}, {
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#dadada"
	  }]
	}, {
	  "featureType": "road.highway",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#616161"
	  }]
	}, {
	  "featureType": "road.local",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#9e9e9e"
	  }]
	}, {
	  "featureType": "transit.line",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#e5e5e5"
	  }]
	}, {
	  "featureType": "transit.station",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#eeeeee"
	  }]
	}, {
	  "featureType": "water",
	  "elementType": "geometry",
	  "stylers": [{
	    "color": "#c9c9c9"
	  }]
	}, {
	  "featureType": "water",
	  "elementType": "geometry.fill",
	  "stylers": [{
	    "color": "#86a77a"
	  }]
	}, {
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [{
	    "color": "#9e9e9e"
	  }]
	}];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initMap;
	function initMap() {
	  window.map = new google.maps.Map(document.getElementById('map'), {
	    center: { lat: 61.28, lng: 73.28 },
	    zoom: 12,
	    disableDefaultUI: true,
	    scrollwheel: false
	  });
	  map.setOptions({ styles: window.styles });
	  var marker = new google.maps.Marker({
	    position: { lat: 61.258031, lng: 73.385922 },
	    map: window.map,
	    title: 'Это мой город!',
	    icon: {
	      url: 'assets/img/map_marker.png'
	    }
	  });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=gmap.js.map