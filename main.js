/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	render: function(data) {
		var body = document.getElementsByTagName[0]

		data.forEach(function(el){
		document.body.appendChild(el);
		})
	}
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_js__ = __webpack_require__(2);
// var newDiv = document.createElement('div');
// 	newDiv.id = 'questionary';
// 	newDiv.style.backgroundColor = '#8FBC8F';
// 	newDiv.style.width = '980px';
// 	newDiv.style.height = '500px';
// 	newDiv.style.margin = '0 auto';
// 	newDiv.style.fontSize = '19px';
// 	document.body.appendChild(newDiv);

// var newTitle = document.createElement('h1');
// 	newTitle.innerHTML = 'Questionary';
// 	newTitle.style.margin = '0';
// 	newTitle.style.padding = '40px 0 40px';
// 	newTitle.style.textAlign = 'center';
// 	document.getElementById("questionary").appendChild(newTitle);

// var fotoStudent = document.createElement('img');
// 	fotoStudent.setAttribute('src', 'img/foto.jpg');
// 	fotoStudent.style.width = '160px';
// 	fotoStudent.style.height = '220px';
// 	fotoStudent.style.margin = '0 50px 15px 50px';
// 	fotoStudent.style.float = 'left';
// 	document.getElementById("questionary").appendChild(fotoStudent);

// var nameStudent = document.createElement('p');
// 	nameStudent.innerHTML = '<b> Student: </b> Kozlenko Juliya <br>';
// 	nameStudent.style.textAlign = 'left';
// 	nameStudent.style.margin = '0 15px 30px';
// 	document.getElementById("questionary").appendChild(nameStudent);

// var aboutYourself = document.createElement('ul');
// 	aboutYourself.id = 'aboutYourself';	
// 	aboutYourself.innerHTML = '<b> About Yourself: </b> graduated with honors:';
// 	document.getElementById("questionary").appendChild(aboutYourself);

// var courseFirst = document.createElement('li');	
// 	courseFirst.innerHTML = 'HTML&CSS (base)'; 
// 	courseFirst.style.margin = '15px 0 0 240px';
// 	courseFirst.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseFirst);

// var courseSecond = document.createElement('li');	
// 	courseSecond.innerHTML = 'JavaScript (base)';
// 	courseSecond.style.marginLeft = '240px';
// 	courseSecond.style.textDecoration = 'underline'; 
// 	document.getElementById('aboutYourself').appendChild(courseSecond);

// var courseThird = document.createElement('li');	
// 	courseThird.innerHTML = 'JavaScript (adv)';
// 	courseThird.style.marginLeft = '240px';
// 	courseThird.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseThird);

// var courseFourth = document.createElement('li');	
// 	courseFourth.innerHTML = 'JQuery'; 
// 	courseFourth.style.marginLeft = '240px';
// 	courseFourth.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseFourth);


__WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_js__["a" /* default */].render();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_js__ = __webpack_require__(0);


let controller = {
	model: __WEBPACK_IMPORTED_MODULE_0__models_info_js__["a" /* default */],
	view: __WEBPACK_IMPORTED_MODULE_1__views_engine_js__["a" /* default */],
	work: function() {
		let result = [],
		data = this.model.data;
		result = data.map(function(el){
			let html = document.createElement(el.tag);
			if (el.body) {
				html.innerHTML = el.body;
			}
			if (el.src) {
				html.setAttribute('src', el.src);
			}
			return html;

		} )

		this.markUp = result;
		return result;
	},
	render:function() {
		this.work();
		this.view.render(this.markUp);
	},
	markUp: []
};
/* harmony default export */ __webpack_exports__["a"] = (controller);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	data: [{tag:"h1", body:'Questionary'},
		{tag:'img', src:'./static/img/foto.jpg'},
		{tag:'p', body:'<b>Student:</b> Kozlenko Juliya'},
		{tag:'ul', body:'<b>About Yourself:</b> graduated with honors:'},
		{tag:'li', body:'HTML&CSS (base)'},
		{tag:'li', body:'JavaScript (base)'},
		{tag:'li', body:'JavaScript (adv)'},
		{tag:'li', body:'JQuery'}
		]
});

/***/ })
/******/ ]);