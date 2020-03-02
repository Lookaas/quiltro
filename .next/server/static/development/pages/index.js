module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons.ts":
/*!*************************!*\
  !*** ./assets/icons.ts ***!
  \*************************/
/*! exports provided: band_aid, birthday_cake, dog, mars, paw, syringe, venus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "band_aid", function() { return band_aid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "birthday_cake", function() { return birthday_cake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dog", function() { return dog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mars", function() { return mars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paw", function() { return paw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syringe", function() { return syringe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "venus", function() { return venus; });
const band_aid = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="band-aid" class="svg-inline--fa fa-band-aid fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M0 160v192c0 35.3 28.7 64 64 64h96V96H64c-35.3 0-64 28.7-64 64zm576-64h-96v320h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zM192 416h256V96H192v320zm176-232c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24z"></path></svg>';
const birthday_cake = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="birthday-cake" class="svg-inline--fa fa-birthday-cake fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path></svg>';
const dog = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dog" class="svg-inline--fa fa-dog fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path></svg>';
const mars = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mars" class="svg-inline--fa fa-mars fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>';
const paw = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paw" class="svg-inline--fa fa-paw fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path></svg>';
const syringe = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="syringe" class="svg-inline--fa fa-syringe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"></path></svg>';
const venus = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus" class="svg-inline--fa fa-venus fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>';

/***/ }),

/***/ "./components/LeftSideBar/ContactInformation/index.tsx":
/*!*************************************************************!*\
  !*** ./components/LeftSideBar/ContactInformation/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactInformation; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/LeftSideBar/ContactInformation/style.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\ContactInformation\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */




class ContactInformation extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const {
      onChange,
      formValues
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["sidebarContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["H4"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Datos de contacto"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Nombre *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      placeholder: "Nombre",
      name: "nombre-contacto",
      required: true,
      value: formValues['nombre-contacto'],
      onChange: e => {
        onChange('nombre-contacto', e.currentTarget.value);
      },
      leftIcon: "person",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Tel\xE9fono *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      placeholder: "Tel\xE9fono",
      name: "telefono-contacto",
      value: formValues['telefono-contacto'],
      onChange: e => {
        onChange('telefono-contacto', e.currentTarget.value);
      },
      leftIcon: "mobile-phone",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Email *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "Email",
      type: "email",
      placeholder: "Email",
      value: formValues['email-contacto'],
      onChange: e => {
        onChange('email-contacto', e.currentTarget.value);
      },
      leftIcon: "inbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Ciudad *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      placeholder: "Ciudad",
      name: "ciudad-contacto",
      value: formValues['ciudad-contacto'],
      onChange: e => {
        onChange('ciudad-contacto', e.currentTarget.value);
      },
      leftIcon: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))));
  }

}

/***/ }),

/***/ "./components/LeftSideBar/ContactInformation/style.ts":
/*!************************************************************!*\
  !*** ./components/LeftSideBar/ContactInformation/style.ts ***!
  \************************************************************/
/*! exports provided: sidebarContainerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarContainerStyle", function() { return sidebarContainerStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const sidebarContainerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  margin: 1rem;
  min-width: 300px;
  width: 300px;
`;

/***/ }),

/***/ "./components/LeftSideBar/PetInformation/index.tsx":
/*!*********************************************************!*\
  !*** ./components/LeftSideBar/PetInformation/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PetInformation; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/LeftSideBar/PetInformation/style.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\PetInformation\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */




class PetInformation extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      size: '',
      caseOption: '',
      sex: '',
      inputFileRef: Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])()
    });

    _defineProperty(this, "onSizeChanged", e => {
      const {
        onChange
      } = this.props;
      const size = e.currentTarget.value;
      this.setState({
        size
      });
      onChange('tamaño-mascota', size);
    });

    _defineProperty(this, "onCaseChanged", e => {
      const {
        onChange
      } = this.props;
      const caseOption = e.currentTarget.value;
      this.setState({
        caseOption
      });
      onChange('caso-mascota', caseOption);
    });

    _defineProperty(this, "onSexChanged", e => {
      const {
        onChange
      } = this.props;
      const sex = e.currentTarget.value;
      this.setState({
        sex
      });
      onChange('caso-mascota', sex);
    });

    _defineProperty(this, "openFile", () => {
      this.state.inputFileRef.current.click();
    });

    _defineProperty(this, "loadImageOntoReader", event => {
      const img = new Image();
      img.src = event.target.result;
      img.addEventListener('load', () => {
        this.props.onImageUploaded(img);
      });
    });

    _defineProperty(this, "onFileUploaded", e => {
      const reader = new FileReader();
      reader.onload = this.loadImageOntoReader;
      const file = e.currentTarget.files[0];

      if (!file) {
        console.error('!file', file, e);
      }

      reader.readAsDataURL(e.currentTarget.files[0]);
    });
  }

  render() {
    const {
      onChange,
      formValues,
      addText
    } = this.props;
    const {
      size,
      caseOption,
      sex,
      inputFileRef
    } = this.state;
    const añosTag = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "A\xF1os");
    const mesesTag = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Meses");
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["sidebarContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["H4"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Informaci\xF3n"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Imagen *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      intent: "primary",
      rightIcon: "upload",
      text: "Subir Imagen",
      onClick: this.openFile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
      ref: inputFileRef,
      onChange: this.onFileUploaded,
      type: "file",
      css: _style__WEBPACK_IMPORTED_MODULE_3__["fileUpload"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: 'Nombre',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "nombre-mascota",
      placeholder: "Nombre",
      intent: "primary",
      value: formValues['nombre-mascota'],
      onChange: e => {
        onChange('nombre-mascota', e.currentTarget.value);
      },
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Caso *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      name: "caso",
      value: caseOption,
      onChange: e => onChange('caso-mascota', caseOption),
      checked: Boolean(caseOption),
      required: true,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["fakeRadioGroupStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: this.onCaseChanged,
      checked: caseOption === '1',
      label: "Mascota en adopci\xF3n",
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: this.onCaseChanged,
      checked: caseOption === '2',
      label: "Mascota perdida",
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Edad aproximada *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      style: {
        display: 'flex',
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      style: {
        width: '50%',
        margin: '2px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "edad-mascota",
      value: formValues['años-mascota'],
      placeholder: "A\xF1os",
      rightElement: añosTag,
      onChange: e => {
        onChange('años-mascota', e.currentTarget.value);
      },
      max: 20,
      min: 0,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      style: {
        width: '50%',
        margin: '2px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "edad-mascota",
      value: formValues['meses-mascota'],
      placeholder: "Meses",
      rightElement: mesesTag,
      onChange: e => {
        onChange('meses-mascota', e.currentTarget.value);
      },
      max: 11,
      min: 0,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Sexo *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      name: "sexo-mascota",
      value: formValues['sexo-mascota'],
      onChange: e => onChange('sexo-mascota', Boolean(sex)),
      checked: Boolean(formValues['sexo-mascota']),
      required: true,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["fakeRadioGroupStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: e => onChange('sexo-mascota', '1'),
      checked: formValues['sexo-mascota'] === '1',
      label: "Macho",
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: e => onChange('sexo-mascota', '2'),
      checked: formValues['sexo-mascota'] === '2',
      label: "Hembra",
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Tama\xF1o *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      name: "tama\xF1o-mascota",
      value: formValues["tamaño-mascota"],
      onChange: e => onChange('tamaño-mascota', Boolean(size)),
      checked: Boolean(formValues["tamaño-mascota"]),
      required: true,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["fakeRadioGroupStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: e => onChange('tamaño-mascota', 's'),
      checked: formValues["tamaño-mascota"] === 's',
      label: "Peque\xF1o",
      value: "s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: e => onChange('tamaño-mascota', 'm'),
      checked: formValues["tamaño-mascota"] === 'm',
      label: "Mediano",
      value: "m",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: e => onChange('tamaño-mascota', 'l'),
      checked: formValues["tamaño-mascota"] === 'l',
      label: "Grande",
      value: "l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
      name: "esterilizado",
      label: "\xBFEst\xE1 esterilizado?",
      checked: formValues.esterilizado,
      onChange: e => {
        onChange('esterilizado', !formValues.esterilizado);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
      name: "chip",
      label: "\xBFTiene chip?",
      checked: formValues.chip,
      onChange: e => {
        onChange('chip', !formValues.chip);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
      name: "vacunas",
      label: "\xBFTiene las vacunas al d\xEDa?",
      checked: formValues.vacunas,
      onChange: e => {
        onChange('vacunas', !formValues.vacunas);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/LeftSideBar/PetInformation/style.ts":
/*!********************************************************!*\
  !*** ./components/LeftSideBar/PetInformation/style.ts ***!
  \********************************************************/
/*! exports provided: sidebarContainerStyle, fakeRadioGroupStyle, fileUpload, containerStyle, ageInputStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarContainerStyle", function() { return sidebarContainerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeRadioGroupStyle", function() { return fakeRadioGroupStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerStyle", function() { return containerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ageInputStyle", function() { return ageInputStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const sidebarContainerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  margin: 1rem;
  min-width: 300px;
  width: 300px;
`;
const fakeRadioGroupStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  opacity: 0;
  height: 1;
  position: absolute;
`;
const fileUpload = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: none;
`;
const containerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const ageInputStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  width:
`;

/***/ }),

/***/ "./components/LeftSideBar/SubmitButton/index.tsx":
/*!*******************************************************!*\
  !*** ./components/LeftSideBar/SubmitButton/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/LeftSideBar/SubmitButton/style.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\SubmitButton\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */





class SubmitButton extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: _style__WEBPACK_IMPORTED_MODULE_3__["sidebarContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      intent: "none",
      rightIcon: "floppy-disk",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Crear Imagen"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./components/LeftSideBar/SubmitButton/style.ts":
/*!******************************************************!*\
  !*** ./components/LeftSideBar/SubmitButton/style.ts ***!
  \******************************************************/
/*! exports provided: sidebarContainerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarContainerStyle", function() { return sidebarContainerStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const sidebarContainerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
`;

/***/ }),

/***/ "./components/LeftSideBar/index.tsx":
/*!******************************************!*\
  !*** ./components/LeftSideBar/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContactInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactInformation */ "./components/LeftSideBar/ContactInformation/index.tsx");
/* harmony import */ var _PetInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PetInformation */ "./components/LeftSideBar/PetInformation/index.tsx");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitButton */ "./components/LeftSideBar/SubmitButton/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/LeftSideBar/styles.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */






class LeftSidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFormValid: false
    });

    _defineProperty(this, "getDataByKey", (form, key) => {
      return form[key].toString();
    });

    _defineProperty(this, "getFormData", () => {
      const formData = new FormData();
      const {
        formValues
      } = this.props;

      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          const element = this.getDataByKey(formValues, key);
          formData.append(key, element);
        }
      }

      const imageBlob = this.onExportImageClicked();
      formData.append('image', imageBlob);
      return {
        formData,
        formJson: formValues
      };
    });

    _defineProperty(this, "dataURItoBlob", dataURI => {
      let byteString;
      let mimestring;

      if (dataURI.split(',')[0].indexOf('base64') !== -1) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = decodeURI(dataURI.split(',')[1]);
      }

      mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const content = new Array();

      for (let i = 0; i < byteString.length; i++) {
        content[i] = byteString.charCodeAt(i);
      }

      return new Blob([new Uint8Array(content)], {
        type: mimestring
      });
    });

    _defineProperty(this, "onExportImageClicked", () => {
      const imgB64 = this.props.canvasRef.current.toDataURL({
        pixelRatio: 2
      });
      const blob = this.dataURItoBlob(imgB64);
      return blob;
    });

    _defineProperty(this, "onSubmit", async e => {
      e.preventDefault();
      const imgB64 = this.props.canvasRef.current.getStage().toDataURL({
        pixelRatio: 3,
        quality: 1,
        mimeType: 'image/png',
        width: 500,
        height: 750
      });
      let link = document.createElement('a');
      link.download = "Test";
      link.href = imgB64;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      /*const { formData, formJson } = this.getFormData();
      const response = await fetch('/api/image', {
        body: formData,
        method: 'POST'
      }).then(r => r.json());
        ReactGA.event({
        action: 'adoption-created',
        category: 'User',
        value: 1,
        ...formJson
      });*/
    });

    _defineProperty(this, "onFormChange", e => {
      const isFormValid = e.currentTarget.checkValidity();
      this.setState({
        isFormValid
      });
    });
  }

  render() {
    const {
      onTextChanged,
      formValues,
      onInputChanged,
      onTextBlockInteracted,
      selectedTextBlock,
      textBlocks,
      addTextBlockWithData,
      onImageUploaded
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("form", {
      onSubmit: this.onSubmit,
      onChange: this.onFormChange,
      css: _styles__WEBPACK_IMPORTED_MODULE_5__["containerStyle"],
      method: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_PetInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: onInputChanged,
      formValues: formValues,
      addText: addTextBlockWithData,
      onImageUploaded: onImageUploaded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ContactInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: onInputChanged,
      formValues: formValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/LeftSideBar/styles.ts":
/*!******************************************!*\
  !*** ./components/LeftSideBar/styles.ts ***!
  \******************************************/
/*! exports provided: containerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerStyle", function() { return containerStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const containerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

/***/ }),

/***/ "./components/Nav/index.tsx":
/*!**********************************!*\
  !*** ./components/Nav/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Nav/styles.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\Nav\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      css: _styles__WEBPACK_IMPORTED_MODULE_3__["navContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Group, {
      align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Alignment"].LEFT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Heading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Quiltro"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Nav/styles.ts":
/*!**********************************!*\
  !*** ./components/Nav/styles.ts ***!
  \**********************************/
/*! exports provided: navContainerStyle, ulStyle, fileUpload, buttonStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navContainerStyle", function() { return navContainerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ulStyle", function() { return ulStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const navContainerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]``;
const ulStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
const fileUpload = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: none;
`;
const buttonStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
`;

/***/ }),

/***/ "./components/canvas/BackgroundImage/index.tsx":
/*!*****************************************************!*\
  !*** ./components/canvas/BackgroundImage/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundImage; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\BackgroundImage\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */



class BackgroundImage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      backgroundImage,
      canvasHeight,
      canvasWidth
    } = this.props;

    if (!backgroundImage) {
      return null;
    }

    const {
      height,
      width
    } = backgroundImage;
    const medianWidth = -(width / 2 - canvasWidth) / 2;
    const medianHeight = -(height / 2 - canvasHeight) / 2;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Layer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, backgroundImage && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      image: backgroundImage,
      x: medianWidth,
      y: medianHeight,
      scaleX: 0.5,
      scaleY: 0.5,
      draggable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/canvas/CharacteristicsLayer/index.tsx":
/*!**********************************************************!*\
  !*** ./components/canvas/CharacteristicsLayer/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\CharacteristicsLayer\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




class CharacteristicsLayer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      canvasHeight,
      canvasWidth,
      characteristics
    } = this.props;
    const layerWidth = canvasWidth * 0.7;
    const layerHeigth = canvasHeight * 0.1;
    console.log(characteristics);
    const keys = Object.keys(characteristics);
    console.log(characteristics[keys[0]]);
    const offsetDelta = 0.08;
    const xOffset = layerWidth * offsetDelta * (6 - keys.length);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      x: canvasWidth * 0.05,
      y: canvasHeight * 0.75,
      height: layerHeigth,
      width: layerWidth,
      visible: true,
      draggable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      height: layerHeigth * 0.3,
      width: layerWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: "Caracter\xEDsticas",
      fontSize: 20,
      fontStyle: "bold",
      width: layerWidth,
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))), Object.keys(characteristics).sort().map((charKey, index) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      width: layerWidth * 0.16,
      height: layerHeigth,
      x: xOffset + index * layerWidth * 0.16,
      y: layerHeigth * 0.3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Path"], {
      data: characteristics[charKey].icon,
      fill: 'red',
      scaleX: characteristics[charKey].scale,
      scaleY: characteristics[charKey].scale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      y: layerHeigth - 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      width: layerWidth * 0.16,
      text: characteristics[charKey].text,
      fontSize: 10,
      align: 'center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CharacteristicsLayer);

/***/ }),

/***/ "./components/canvas/ContactLayer/index.tsx":
/*!**************************************************!*\
  !*** ./components/canvas/ContactLayer/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\ContactLayer\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




class ContactLayer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      canvasHeight,
      canvasWidth,
      formData
    } = this.props;
    const layerWidth = canvasWidth * 0.2;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      x: canvasWidth * 0.75,
      y: canvasHeight * 0.75,
      width: layerWidth,
      visible: true,
      draggable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      width: layerWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: "Contacto",
      fontSize: 14,
      fontStyle: "bold",
      width: layerWidth,
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), formData['nombre-contacto'] !== '' && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      y: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: formData['nombre-contacto'],
      fontSize: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), formData['telefono-contacto'] !== '+56 ' && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      y: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: formData['telefono-contacto'],
      fontSize: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), formData['email-contacto'] !== '' && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      y: 60,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: formData['email-contacto'],
      fontSize: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), formData['ciudad-contacto'] !== '' && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      y: 80,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      text: formData['ciudad-contacto'],
      fontSize: 14,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContactLayer);

/***/ }),

/***/ "./components/canvas/Text/index.tsx":
/*!******************************************!*\
  !*** ./components/canvas/Text/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\Text\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */




class CanvasText extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      fontSize: 10
    });

    _defineProperty(this, "transformerRef", Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(this, "getNewPosition", pos => {
      const {
        maxWidth,
        maxHeight
      } = this.props;
      const ref = this.transformerRef.current;
      const topBorder = pos.y;
      const bottomBorder = pos.y + ref.height();
      const leftBorder = pos.x;
      const rightBorder = pos.x + ref.width();
      let x = pos.x;
      let y = pos.y;

      if (topBorder < 0) {
        y = 0;
      } else if (bottomBorder > maxHeight) {
        y = maxHeight - ref.height();
      }

      if (leftBorder < 0) {
        x = 0;
      } else if (rightBorder > maxWidth) {
        x = maxWidth - ref.width();
      }

      return {
        x,
        y
      };
    });

    _defineProperty(this, "onTransform", () => {
      const ref = this.transformerRef.current;
      ref.setAttrs({
        scaleX: 1,
        width: ref.width() * ref.scaleX()
      });
    });

    _defineProperty(this, "onDrag", pos => {
      return this.getNewPosition(pos);
    });
  }

  static getDerivedStateFromProps(props) {
    let stateFontSize = 10;
    const {
      fontSize
    } = props;

    if (fontSize === 'small') {
      stateFontSize = 14;
    }

    if (fontSize === 'medium') {
      stateFontSize = 21;
    }

    if (fontSize === 'large') {
      stateFontSize = 35;
    }

    console.log();
    return {
      fontSize: stateFontSize
    };
  }

  render() {
    const {
      id,
      text,
      color,
      onDoubleClick,
      onClick,
      onMouseDown,
      position,
      align,
      width,
      style
    } = this.props;
    const {
      fontSize
    } = this.state;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      draggable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      x: position.x,
      y: position.y,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      padding: 10,
      fontSize: fontSize,
      ref: this.transformerRef,
      name: id,
      id: id,
      fill: color,
      text: text,
      transformsEnabled: "position",
      dragBoundFunc: this.onDrag,
      onTransform: this.onTransform,
      onClick: onClick,
      onDblClick: onDoubleClick,
      onMouseDown: onMouseDown,
      align: align,
      width: width,
      fontStyle: style // _useStrictMode
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CanvasText);

/***/ }),

/***/ "./components/canvas/index.tsx":
/*!*************************************!*\
  !*** ./components/canvas/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackgroundImage */ "./components/canvas/BackgroundImage/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/canvas/style.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text */ "./components/canvas/Text/index.tsx");
/* harmony import */ var _CharacteristicsLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CharacteristicsLayer */ "./components/canvas/CharacteristicsLayer/index.tsx");
/* harmony import */ var _ContactLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContactLayer */ "./components/canvas/ContactLayer/index.tsx");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */










class Canvas extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      backgroundImage: null,
      editTextAreaProps: {},
      editTextAreaValue: '',
      onTextAreaClosed: () => null,
      showEditTextArea: false,
      targetToRestore: []
    });

    _defineProperty(this, "transformerRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(this, "resizeImageHeight", (img, newHeight, newWidth) => {
      const canvas = document.createElement('canvas');
      canvas.height = newHeight;
      canvas.width = newWidth;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        return Promise.resolve(img);
      }

      return new Promise((resolve, reject) => {
        ctx.drawImage(img, 0, 0);
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        const dataurl = canvas.toDataURL('image/png');
        const newImage = new Image();
        newImage.src = dataurl;
        newImage.addEventListener('load', () => {
          resolve(newImage);
        });
        newImage.addEventListener('error', () => {
          reject(img);
        });
      });
    });

    _defineProperty(this, "getResizedImage", image => {
      const {
        height,
        width
      } = image;
      const {
        canvasHeight,
        canvasWidth
      } = this.props;
      let imageHeight = height;
      let imageWidth = width; // Resize to go over the canvas height

      imageWidth = imageWidth * (canvasHeight / imageHeight);
      imageHeight = canvasHeight; // Resize to go over the canvas width

      if (canvasWidth > imageWidth) {
        imageHeight = imageHeight * (canvasWidth / imageWidth);
        imageWidth = canvasWidth;
      }

      return this.resizeImageHeight(image, imageHeight, imageWidth);
    });

    _defineProperty(this, "onTextClick", e => {
      e.cancelBubble = true;
      const selectedTextBlock = e.target.name();
      this.props.onTextBlockSelected(selectedTextBlock);
    });

    _defineProperty(this, "handleStageMouseDown", e => {
      const showEditTextArea = false;
      let selectedTextBlock = '';
      const {
        currentTarget
      } = e;
      const {
        targetToRestore
      } = this.state;
      const {
        onTextBlockSelected
      } = this.props;
      /*const clickedOnStage = target === currentTarget.getStage();
      //const clickedOnTransformer =
      //  target.getParent() && target.getParent().className === 'Transformer';
      //const hasNoName = Boolean(target.name()); // If the thing we are clicking has no name
      const isTextNode = typeof e.currentTarget.stat === 'function'; // TODO: maybe remove this?
      if (isTextNode) {
        selectedTextBlock = e.target.name;
      }*/

      if (targetToRestore) {
        targetToRestore.forEach(el => {
          const canvasRef = this.props.canvasRef.current;
          el.show();
          canvasRef.draw();
        });
      }

      this.setState({
        showEditTextArea
      }, () => onTextBlockSelected(selectedTextBlock));
    });

    _defineProperty(this, "showElements", currentTarget => () => {
      this.setState({
        showEditTextArea: false
      }, () => {
        currentTarget.hide();
        const transformerRef = this.transformerRef.current;
        const canvasRef = this.props.canvasRef.current;
        currentTarget.show();
        transformerRef.show();
        canvasRef.draw();
      });
    });

    _defineProperty(this, "hideElements", currentTarget => {
      currentTarget.hide();
      const transformerRef = this.transformerRef.current;
      const canvasRef = this.props.canvasRef.current;
      currentTarget.hide();
      transformerRef.hide();
      canvasRef.draw();
    });

    _defineProperty(this, "onMouseDown", evt => {
      const {
        onTextBlockSelected
      } = this.props;
      evt.cancelBubble = true;
      const currentTarget = evt.target;
      const {
        id
      } = currentTarget.attrs;
      onTextBlockSelected(id);
    });

    _defineProperty(this, "onDoubleClick", evt => {
      const currentTarget = evt.currentTarget;
      const transformerRef = this.transformerRef.current;
      const canvasRef = this.props.canvasRef.current;
      this.hideElements(currentTarget); // We will create a textarea absolutely positioned over the canvas
      // And we will render it on a portal
      // first we need to find position for textarea
      // At first lets find position of text node relative to the stage:

      const {
        x,
        y
      } = currentTarget.absolutePosition();
      const {
        left,
        top
      } = canvasRef.container().getBoundingClientRect(); // so position of textarea will be the sum of positions above:

      const areaPosition = {
        x: left + x,
        y: top + y
      }; // Create textarea styles to match text on canvas as close as possible
      // (Text rendering on canvas and on the textarea can be different
      // and sometimes it is hard to make it 100% the same)

      const targetToRestore = [currentTarget, transformerRef];
      const showEditTextArea = true;
      const editTextAreaValue = currentTarget.text();
      const editTextAreaProps = {
        color: currentTarget.fill() + '',
        fontFamily: currentTarget.fontFamily() + '',
        fontSize: currentTarget.fontSize() + 'px',
        height: currentTarget.height() + 'px',
        left: areaPosition.x + 'px',
        lineHeight: currentTarget.lineHeight() + '',
        padding: currentTarget.padding() + 'px',
        textAlign: currentTarget.align() + '',
        top: areaPosition.y + 'px',
        transformOrigin: 'left top',
        width: currentTarget.width() + 5 + 'px'
      };
      const onTextAreaClosed = this.showElements(currentTarget);
      this.setState({
        editTextAreaProps,
        editTextAreaValue,
        onTextAreaClosed,
        showEditTextArea,
        targetToRestore
      });
    });

    _defineProperty(this, "onMount", ref => {
      this.transformerRef = ref;
    });
  }

  async componentDidUpdate(prevProps) {
    const {
      image
    } = this.props;

    if (image && image !== prevProps.image) {
      const backgroundImage = await this.getResizedImage(image);
      this.setState({
        backgroundImage
      });
    }
  }

  render() {
    const {
      backgroundImage,
      showEditTextArea,
      editTextAreaProps,
      onTextAreaClosed
    } = this.state;
    const {
      canvasTexts,
      onRef,
      onTextChanged,
      canvasHeight,
      canvasWidth,
      characteristics,
      formData
    } = this.props;
    const {
      textBlocks,
      selectedTextBlock
    } = canvasTexts; //const test = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus" class="svg-inline--fa fa-venus fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>'

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_5__["canvasStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    },  false && false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./components/canvas/style.ts":
/*!************************************!*\
  !*** ./components/canvas/style.ts ***!
  \************************************/
/*! exports provided: canvasStyle, testStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasStyle", function() { return canvasStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testStyle", function() { return testStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const canvasStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 35rem;
  justify-content: center;
  & .konvajs-content {
    background-color: white;
    border: solid 1px lightgray;
  }
`;
const testStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas/index.tsx");
/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LeftSideBar */ "./components/LeftSideBar/index.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./pages/styles.ts");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons */ "./assets/icons.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */








class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      canvasImage: null,
      canvasTexts: {
        selectedTextBlock: '',
        textBlocks: {}
      },
      formValues: {
        chip: false,
        'edad-mascota': '',
        'email-contacto': '',
        esterilizado: false,
        'informacion-extra-mascota': '',
        'nombre-contacto': '',
        'nombre-mascota': '',
        'tamaño-mascota': '',
        'telefono-contacto': '+56 ',
        vacunas: false,
        'whatsapp-contacto': '',
        'caso-mascota': '',
        'ciudad-contacto': '',
        'sexo-mascota': '',
        'años-mascota': '',
        'meses-mascota': ''
      },
      characteristics: {},
      canvasHeight: 750,
      canvasWidth: 500
    });

    _defineProperty(this, "stageRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(this, "setSelectedTextBlock", selectedTextBlock => {
      const {
        canvasTexts
      } = this.state;
      this.setState({
        canvasTexts: _objectSpread({}, canvasTexts, {
          selectedTextBlock
        })
      });
    });

    _defineProperty(this, "setCanvasImage", image => {
      this.setState({
        canvasImage: image
      });
    });

    _defineProperty(this, "onTextChanged", (key, value, id) => {
      const {
        canvasTexts
      } = this.state;
      const {
        textBlocks
      } = canvasTexts;
      this.setState({
        canvasTexts: _objectSpread({}, canvasTexts, {
          textBlocks: _objectSpread({}, textBlocks, {
            [id]: _objectSpread({}, textBlocks[id], {
              [key]: value
            })
          })
        })
      });
    });

    _defineProperty(this, "onTextBlockChanged", (id, text) => {
      const {
        canvasTexts
      } = this.state;
      const {
        textBlocks
      } = canvasTexts;
      this.setState({
        canvasTexts: _objectSpread({}, canvasTexts, {
          textBlocks: _objectSpread({}, textBlocks, {
            [id]: _objectSpread({}, textBlocks[id], {
              text
            })
          })
        })
      }, () => {
        console.log(this.state);
      });
    });

    _defineProperty(this, "setAdoptionFormField", (key, value) => {
      const {
        canvasTexts,
        canvasHeight,
        canvasWidth,
        characteristics,
        formValues
      } = this.state;
      const {
        textBlocks
      } = canvasTexts;
      const actualCharacteristics = characteristics;
      let newTextBlock = {
        id: key,
        color: 'black',
        text: value,
        fontSize: 'medium',
        position: {
          x: 0,
          y: 0
        }
      };
      let characteristic = {
        priority: '',
        text: '',
        icon: '',
        scale: -1
      };
      let validator = '';

      switch (key) {
        case 'nombre-mascota':
          newTextBlock.align = 'center';
          newTextBlock.width = canvasWidth;
          newTextBlock.position.y = canvasHeight * 0.1;
          newTextBlock.style = 'bold';
          newTextBlock.fontSize = 'large';
          validator = 'textBlock';
          break;

        case 'caso-mascota':
          newTextBlock.align = 'center';
          newTextBlock.width = canvasWidth;
          newTextBlock.position.y = canvasHeight * 0.2;
          newTextBlock.text = value === '1' ? "En adopción" : 'Perdido';
          validator = 'textBlock';
          break;

        case 'años-mascota':
          if (isNaN(value)) {
            value = formValues['años-mascota'];
          } else {
            const meses = formValues['meses-mascota'];
            let edadString = '';

            if (value !== '' && meses !== '') {
              edadString = value + ' años ' + meses + ' meses';
            } else if (value !== '') {
              edadString = value + ' años';
            } else if (meses !== '') {
              edadString = meses + ' meses';
            }

            characteristic = {
              priority: '0',
              icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["birthday_cake"],
              text: edadString,
              scale: 0.08
            };
            validator = 'characteristic';
          }

          break;

        case 'meses-mascota':
          if (isNaN(value)) {
            value = formValues['meses-mascota'];
          } else {
            const años = formValues['años-mascota'];
            let edadString2 = '';

            if (value !== '' && años !== '') {
              edadString2 = años + ' años ' + value + ' meses';
            } else if (value !== '') {
              edadString2 = value + ' meses';
            } else if (años !== '') {
              edadString2 = años + ' años';
            }

            characteristic = {
              priority: '0',
              icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["birthday_cake"],
              text: edadString2,
              scale: 0.08
            };
            validator = 'characteristic';
          }

          break;

        case 'sexo-mascota':
          characteristic = {
            priority: '1',
            icon: value === '1' ? _assets_icons__WEBPACK_IMPORTED_MODULE_6__["mars"] : _assets_icons__WEBPACK_IMPORTED_MODULE_6__["venus"],
            text: value === '1' ? 'Macho' : 'Hembra',
            scale: 0.08
          };
          validator = 'characteristic';
          break;

        case 'tamaño-mascota':
          characteristic = {
            priority: '3',
            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["dog"],
            text: value === 's' ? 'Pequeño' : value === 'm' ? 'Mediano' : 'Grande',
            scale: value === 's' ? 0.04 : value === 'm' ? 0.06 : 0.08
          };
          validator = 'characteristic';
          break;

        case 'esterilizado':
          if (value) {
            characteristic = {
              priority: '4',
              icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["band_aid"],
              text: 'Esterilizado',
              scale: 0.08
            };
            validator = 'characteristic';
          } else {
            delete actualCharacteristics['4'];
            validator = 'deletedCharacteristic';
          }

          break;

        case 'chip':
          if (value) {
            characteristic = {
              priority: '5',
              icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["paw"],
              text: 'Con chip',
              scale: 0.08
            };
            validator = 'characteristic';
          } else {
            delete actualCharacteristics['5'];
            validator = 'deletedCharacteristic';
          }

          break;

        case 'vacunas':
          if (value) {
            characteristic = {
              priority: '6',
              icon: _assets_icons__WEBPACK_IMPORTED_MODULE_6__["syringe"],
              text: 'Al día',
              scale: 0.08
            };
            validator = 'characteristic';
          } else {
            delete actualCharacteristics['6'];
            validator = 'deletedCharacteristic';
          }

          break;

        case 'telefono-contacto':
          if (value.length < 4) {
            value = '+56 ';
          } else if (isNaN(value.slice(4).trim())) {
            value = formValues['telefono-contacto'];
          }

          break;

        /*case 'nombre-contacto':
          newTextBlock.fontSize = 'small';
          newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7};
          validator = 'textBlock';
          break;
        case 'telefono-contacto':
          if (value.length < 4) {
            value = '+56 ';
          }
          newTextBlock.fontSize = 'small';
          newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 30};
          validator = 'textBlock';
          break;
          case 'email-contacto':
            newTextBlock.fontSize = 'small';
            newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 60};
            validator = 'textBlock';
            break;
          case 'ciudad-contacto':
            newTextBlock.fontSize = 'small';
            newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 90};
            validator = 'textBlock';
            break;
        */

        default:
      }

      if (validator === 'textBlock') {
        this.setState({
          formValues: _objectSpread({}, this.state.formValues, {
            [key]: value
          }),
          canvasTexts: _objectSpread({}, canvasTexts, {
            textBlocks: _objectSpread({}, textBlocks, {
              [key]: newTextBlock
            })
          })
        });
      } else if (validator === 'characteristic') {
        this.setState({
          formValues: _objectSpread({}, this.state.formValues, {
            [key]: value
          }),
          characteristics: _objectSpread({}, characteristics, {
            [characteristic.priority]: characteristic
          })
        });
      } else if (validator = 'deletedCharacteristic') {
        this.setState({
          formValues: _objectSpread({}, this.state.formValues, {
            [key]: value
          }),
          characteristics: actualCharacteristics
        });
      }
    });

    _defineProperty(this, "deleteCharacteristic", characPriority => {
      const {
        characteristics
      } = this.state;
      const actualCharacteristics = characteristics;
      const updatePriority = {};
      Object.keys(characteristics).forEach(priority => {
        if (priority !== characPriority) {
          updatePriority[priority] = actualCharacteristics[priority];
        }
      });
    });

    _defineProperty(this, "addTextBlockWithData", newTextblock => {
      const {
        canvasTexts
      } = this.state;
      const {
        textBlocks
      } = canvasTexts;
      const id = newTextblock.id;
      this.setState({
        canvasTexts: _objectSpread({}, canvasTexts, {
          textBlocks: _objectSpread({}, textBlocks, {
            [id]: newTextblock
          })
        })
      });
    });
  }

  componentDidMount() {
    //this.addTextBlock();
    console.log(window.devicePixelRatio);
  }

  render() {
    const {
      canvasImage,
      canvasTexts,
      formValues,
      canvasHeight,
      canvasWidth,
      characteristics
    } = this.state;
    const {
      selectedTextBlock,
      textBlocks
    } = canvasTexts;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_5__["pageStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      "data-name": "bodycontainer",
      css: _styles__WEBPACK_IMPORTED_MODULE_5__["containerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      canvasRef: this.stageRef,
      formValues: formValues,
      onTextBlockInteracted: this.setSelectedTextBlock,
      selectedTextBlock: selectedTextBlock,
      textBlocks: textBlocks,
      onInputChanged: this.setAdoptionFormField,
      onTextChanged: this.onTextChanged,
      addTextBlockWithData: this.addTextBlockWithData,
      onImageUploaded: this.setCanvasImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_canvas__WEBPACK_IMPORTED_MODULE_2__["default"], {
      canvasRef: this.stageRef,
      canvasTexts: canvasTexts,
      currentCanvasText: textBlocks[selectedTextBlock],
      image: canvasImage,
      onRef: this.stageRef,
      onTextChanged: this.onTextBlockChanged,
      onTextBlockSelected: this.setSelectedTextBlock,
      canvasHeight: canvasHeight,
      canvasWidth: canvasWidth,
      characteristics: characteristics,
      formData: formValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/styles.ts":
/*!*************************!*\
  !*** ./pages/styles.ts ***!
  \*************************/
/*! exports provided: containerStyle, pageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerStyle", function() { return containerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageStyle", function() { return pageStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const containerStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  padding-bottom: 4rem;
  width: 900px;
`;
const pageStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\quiltros\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@blueprintjs/core":
/*!************************************!*\
  !*** external "@blueprintjs/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/core");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-konva":
/*!******************************!*\
  !*** external "react-konva" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-konva");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map