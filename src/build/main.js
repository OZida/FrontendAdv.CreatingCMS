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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\nul,\nol {\n  margin: 0;\n  padding: 0; }\n\n/*bg content*/\n/*bg left/right content*/\n/*color*/\n.interface, .message, .success, .error, .warning {\n  background-color: #E0E0E0;\n  margin: 5px 5px;\n  padding: 10px 10px;\n  flex-grow: 3; }\n\n.message {\n  color: #BF360C;\n  background-color: #4FC3F7; }\n  .message:hover {\n    background-color: #FF8A65; }\n\n.success {\n  color: #1B5E20;\n  background-color: #FFEE58; }\n  .success:hover {\n    background-color: #9CCC65; }\n\n.error {\n  color: #ffab40;\n  background-color: #FF8A65; }\n  .error:hover {\n    background-color: #FFEE58; }\n\n.warning {\n  color: #01579B;\n  background-color: #9CCC65; }\n  .warning:hover {\n    background-color: #4FC3F7; }\n\n.content {\n  display: flex;\n  justify-content: space-between;\n  background-color: #281938; }\n\n.left_content {\n  flex-basis: 15%;\n  background-color: #482e5e; }\n  .left_content .sidebar_header {\n    text-align: center;\n    padding: 45px 0;\n    color: #b4a9b8;\n    /*background: url(./static/img/sidebar_header_bg.jpg);*/ }\n    .left_content .sidebar_header h3 {\n      margin-bottom: 40px; }\n    .left_content .sidebar_header #user_menu {\n      text-decoration: none;\n      color: #b4a9b8;\n      font-size: 18px;\n      padding: 15px;\n      margin: 20px 0;\n      border-radius: 30px;\n      border: 1px solid #c8a9ff;\n      text-transform: uppercase;\n      box-sizing: border-box; }\n      .left_content .sidebar_header #user_menu:hover {\n        background-color: rgba(149, 117, 205, 0.5);\n        transition: 0.5s all ease; }\n  .left_content .sidebar_nav_menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch; }\n    .left_content .sidebar_nav_menu li {\n      list-style: none;\n      flex-basis: 55px;\n      border-bottom: 1px solid #523d66; }\n    .left_content .sidebar_nav_menu li:first-child {\n      border-top: 1px solid #523d66; }\n    .left_content .sidebar_nav_menu img {\n      margin: 15px;\n      vertical-align: middle; }\n    .left_content .sidebar_nav_menu a {\n      text-decoration: none;\n      color: #c8a9ff;\n      font-size: 16px;\n      line-height: 55px;\n      display: block; }\n      .left_content .sidebar_nav_menu a:hover {\n        background-color: rgba(149, 117, 205, 0.5);\n        transition: 0.5s all ease; }\n    .left_content .sidebar_nav_menu .sidebar_proj a {\n      color: #b4a9b8; }\n    .left_content .sidebar_nav_menu .sidebar_heading {\n      color: #ffab40;\n      text-transform: uppercase;\n      line-height: 55px;\n      margin-left: 15px; }\n\n.right_content {\n  flex-basis: 85%;\n  margin-left: 30px; }\n  .right_content .main_nav {\n    display: flex;\n    height: 85px;\n    justify-content: space-between; }\n    .right_content .main_nav .main_nav_menu {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      flex-basis: 60%; }\n      .right_content .main_nav .main_nav_menu li {\n        list-style: none; }\n        .right_content .main_nav .main_nav_menu li a {\n          text-decoration: none;\n          color: #c8a9ff;\n          font-size: 18px; }\n          .right_content .main_nav .main_nav_menu li a:hover {\n            color: #b4a9b8;\n            transition: 0.5s all ease; }\n    .right_content .main_nav .engine {\n      flex-basis: 20%;\n      display: flex;\n      align-items: center;\n      justify-content: space-around; }\n      .right_content .main_nav .engine a {\n        padding: 12px 16px;\n        border-radius: 28px;\n        background-color: #482e5e; }\n        .right_content .main_nav .engine a:hover {\n          background-color: rgba(149, 117, 205, 0.5);\n          transition: 0.5s all ease; }\n  .right_content .general {\n    background-color: #482e5e;\n    display: flex;\n    flex-wrap: wrap; }\n    .right_content .general .square {\n      width: 30%; }\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\OZida\\Desktop\\FrontendAdv.CreatingCMSandContent\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	render: function(data) {
		var body = document.getElementsByClassName('general')[0];
		data.forEach(function(el){
			body.appendChild(el);
		})
	}
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_builderCtrl_js__ = __webpack_require__(7);
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


__WEBPACK_IMPORTED_MODULE_1__controllers_builderCtrl_js__["a" /* default */].render();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_js__ = __webpack_require__(5);


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
/* 8 */
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