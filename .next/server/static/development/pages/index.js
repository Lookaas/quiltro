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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LeftSideBar/ColorSelector/index.tsx":
/*!********************************************************!*\
  !*** ./components/LeftSideBar/ColorSelector/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\ColorSelector\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ColorSelector extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", () => {
      const {
        onColorClicked,
        color
      } = this.props;
      onColorClicked(color);
    });
  }

  render() {
    const {
      isActive,
      color
    } = this.props;
    return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      large: true,
      active: isActive,
      onClick: this.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      iconSize: 24,
      icon: "symbol-square",
      color: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ColorSelector);

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
      label: "Nombre",
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Tel\xE9fono",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      placeholder: "Tel\xE9fono",
      name: "telefono-contacto",
      value: formValues['telefono-contacto'],
      onChange: e => {
        onChange('telefono-contacto', e.currentTarget.value);
      },
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Whatsapp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      placeholder: "Whatsapp",
      name: "whatsapp-contacto",
      value: formValues['whatsapp-contacto'],
      onChange: e => {
        onChange('whatsapp-contacto', e.currentTarget.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "Email",
      type: "email-contacto",
      placeholder: "Email",
      value: formValues['email-contacto'],
      onChange: e => {
        onChange('email-contacto', e.currentTarget.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
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
      size: undefined
    });

    _defineProperty(this, "onRadioGroupChanged", e => {
      const size = e.currentTarget.value;
      this.setState({
        size
      });
    });
  }

  render() {
    const {
      onChange,
      formValues
    } = this.props;
    const {
      size
    } = this.state;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["sidebarContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["H4"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Informaci\xF3n"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: 'Nombre',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
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
        lineNumber: 43
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Tama\xF1o *",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      name: "tama\xF1o-mascota",
      value: size,
      onChange: e => onChange('tamaño-mascota', Boolean(size)),
      checked: Boolean(size),
      required: true,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["fakeRadioGroupStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: this.onRadioGroupChanged,
      checked: size === 's',
      label: "Peque\xF1o",
      value: "s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: this.onRadioGroupChanged,
      checked: size === 'm',
      label: "Mediano",
      value: "m",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      onChange: this.onRadioGroupChanged,
      checked: size === 'l',
      label: "Grande",
      value: "l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
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
        lineNumber: 86
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
        lineNumber: 94
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
        lineNumber: 102
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Edad",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      name: "edad-mascota",
      value: formValues['edad-mascota'],
      onChange: e => onChange('edad-mascota', e.currentTarget.value),
      placeholder: "A\xF1os",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Informaci\xF3n Extra",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["TextArea"], {
      fill: true,
      growVertically: true,
      name: "informacion-extra-mascota",
      placeholder: "Extra",
      value: formValues['informacion-extra-mascota'],
      onChange: e => onChange('informacion-extra-mascota', e.currentTarget.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))));
  }

}

/***/ }),

/***/ "./components/LeftSideBar/PetInformation/style.ts":
/*!********************************************************!*\
  !*** ./components/LeftSideBar/PetInformation/style.ts ***!
  \********************************************************/
/*! exports provided: sidebarContainerStyle, fakeRadioGroupStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarContainerStyle", function() { return sidebarContainerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeRadioGroupStyle", function() { return fakeRadioGroupStyle; });
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

/***/ "./components/LeftSideBar/TextBlocksCreator/index.tsx":
/*!************************************************************!*\
  !*** ./components/LeftSideBar/TextBlocksCreator/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBlocksCreator; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel */ "./components/LeftSideBar/TextBlocksCreator/panel.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/LeftSideBar/TextBlocksCreator/style.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\TextBlocksCreator\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */





class TextBlocksCreator extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onTextBlockChanged", textBlockId => (key, value) => {
      const {
        onTextChanged,
        onTextBlockInteracted
      } = this.props;
      onTextBlockInteracted(key);
      onTextChanged(key, value, textBlockId);
    });
  }

  render() {
    const {
      selectedTextBlock,
      onAddTextBlockClicked,
      onTextBlockInteracted,
      textBlocks
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_4__["sidebarContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["H4"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Agregar Texto ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      icon: "plus",
      onClick: onAddTextBlockClicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))), Object.values(textBlocks).map(textBlock => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_panel__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: textBlock.id
    }, textBlock, {
      onMouseDown: () => onTextBlockInteracted(textBlock.id),
      onChange: this.onTextBlockChanged(textBlock.id),
      isSelected: selectedTextBlock === textBlock.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))));
  }

}

_defineProperty(TextBlocksCreator, "buttonsKeys", ['alignment-top', 'align-center', 'alignment-bottom']);

/***/ }),

/***/ "./components/LeftSideBar/TextBlocksCreator/panel.tsx":
/*!************************************************************!*\
  !*** ./components/LeftSideBar/TextBlocksCreator/panel.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBlocksConfigPanel; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ColorSelector */ "./components/LeftSideBar/ColorSelector/index.tsx");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\TextBlocksCreator\\panel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */




class TextBlocksConfigPanel extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onMainTextChanged", e => {
      const {
        onChange
      } = this.props;
      onChange('text', e.currentTarget.value);
    });

    _defineProperty(this, "setHeight", fontSize => {
      const {
        onChange
      } = this.props;
      onChange('fontSize', fontSize);
    });

    _defineProperty(this, "setSelectedColor", color => {
      const {
        onChange
      } = this.props;
      onChange('color', color);
    });
  }

  render() {
    const _this$props = this.props,
          {
      fontSize,
      color,
      onMouseDown,
      text
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["fontSize", "color", "onMouseDown", "text"]);

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      onMouseDown: onMouseDown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Texto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["TextArea"], {
      fill: true,
      growVertically: true,
      name: "Texto",
      value: text,
      onChange: this.onMainTextChanged,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Tama\xF1o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
      fill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      large: true,
      active: fontSize === 'small',
      onClick: () => this.setHeight('small'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      iconSize: 10,
      icon: "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      large: true,
      active: fontSize === 'medium',
      onClick: () => this.setHeight('medium'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      iconSize: 16,
      icon: "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      large: true,
      active: fontSize === 'large',
      onClick: () => this.setHeight('large'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      iconSize: 24,
      icon: "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["FormGroup"], {
      label: "Color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
      fill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, TextBlocksConfigPanel.colors.map(el => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ColorSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: el,
      color: el,
      isActive: el === color,
      onColorClicked: this.setSelectedColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })))));
  }

}

_defineProperty(TextBlocksConfigPanel, "colors", ['black', 'red', 'green', 'purple', 'yellow', 'white']);

/***/ }),

/***/ "./components/LeftSideBar/TextBlocksCreator/style.ts":
/*!***********************************************************!*\
  !*** ./components/LeftSideBar/TextBlocksCreator/style.ts ***!
  \***********************************************************/
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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactInformation */ "./components/LeftSideBar/ContactInformation/index.tsx");
/* harmony import */ var _PetInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PetInformation */ "./components/LeftSideBar/PetInformation/index.tsx");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitButton */ "./components/LeftSideBar/SubmitButton/index.tsx");
/* harmony import */ var _TextBlocksCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextBlocksCreator */ "./components/LeftSideBar/TextBlocksCreator/index.tsx");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      const {
        formData,
        formJson
      } = this.getFormData();
      const response = await fetch('/api/image', {
        body: formData,
        method: 'POST'
      }).then(r => r.json());
      react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.event(_objectSpread({
        action: 'adoption-created',
        category: 'User',
        value: 1
      }, formJson));
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
      addTextBlock,
      textBlocks
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("form", {
      onSubmit: this.onSubmit,
      onChange: this.onFormChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_PetInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChange: onInputChanged,
      formValues: formValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ContactInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: onInputChanged,
      formValues: formValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TextBlocksCreator__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onAddTextBlockClicked: addTextBlock,
      onTextBlockInteracted: onTextBlockInteracted,
      onTextChanged: onTextChanged,
      onChange: onInputChanged,
      selectedTextBlock: selectedTextBlock,
      textBlocks: textBlocks,
      formValues: formValues,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }));
  }

}

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */





class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputFileRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(this, "openFile", () => {
      this.inputFileRef.current.click();
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
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      css: _styles__WEBPACK_IMPORTED_MODULE_3__["navContainerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Group, {
      align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Alignment"].LEFT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Heading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Quiltro"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Group, {
      align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Alignment"].RIGHT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      intent: "primary",
      rightIcon: "upload",
      text: "Subir Imagen",
      onClick: this.openFile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", {
      ref: this.inputFileRef,
      onChange: this.onFileUploaded,
      type: "file",
      css: _styles__WEBPACK_IMPORTED_MODULE_3__["fileUpload"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
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
    const medianWidth = -(width - canvasWidth) / 2;
    const medianHeight = -(height - canvasHeight) / 2;
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }

}

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
      position
    } = this.props;
    const {
      fontSize
    } = this.state;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      padding: 10,
      fontSize: fontSize,
      ref: this.transformerRef,
      name: id,
      id: id,
      fill: color,
      text: text,
      x: position.x,
      y: position.y,
      transformsEnabled: "position",
      draggable: true,
      dragBoundFunc: this.onDrag,
      onTransform: this.onTransform,
      onClick: onClick,
      onDblClick: onDoubleClick,
      onMouseDown: onMouseDown // _useStrictMode
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CanvasText);

/***/ }),

/***/ "./components/canvas/TextArea/index.tsx":
/*!**********************************************!*\
  !*** ./components/canvas/TextArea/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/canvas/TextArea/style.ts");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\TextArea\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */





class EditTextArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      height: 0
    });

    _defineProperty(this, "onChange", e => {
      const {
        onTextAreaChanged,
        selectedtextblockid
      } = this.props;
      const {
        currentTarget
      } = e;
      const {
        height
      } = this.state;
      const {
        value,
        scrollHeight
      } = currentTarget;
      console.log(selectedtextblockid, value);
      onTextAreaChanged(selectedtextblockid, value);

      if (scrollHeight !== height) {
        this.setState({
          height: scrollHeight
        });
      }
    });

    _defineProperty(this, "onKeyDown", e => {
      const {
        onTextAreaClosed
      } = this.props;
      const {
        keyCode,
        shiftKey
      } = e; // If key is 'enter' and shift key is pressed

      if (keyCode === 13 && !shiftKey) {
        // End editing
        onTextAreaClosed();
      } // If key is 'esc'


      if (keyCode === 27) {
        // End editing
        onTextAreaClosed();
      }
    });
  }

  componentDidMount() {
    this.setState({
      height: this.props.style.height
    });
  }

  render() {
    if (!document) {
      return;
    }

    const domNode = document.querySelector('#portal_container');

    if (!domNode) {
      return;
    }

    const {
      height
    } = this.state;

    const _this$props = this.props,
          {
      style,
      maxWidth,
      maxHeight,
      onTextAreaClosed,
      onTextAreaChanged
    } = _this$props,
          restOfProps = _objectWithoutProperties(_this$props, ["style", "maxWidth", "maxHeight", "onTextAreaClosed", "onTextAreaChanged"]);

    const {
      height: _
    } = style,
          rest = _objectWithoutProperties(style, ["height"]);

    return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("textarea", _extends({
      autoFocus: true,
      css: _style__WEBPACK_IMPORTED_MODULE_3__["textaAreaStyle"],
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      style: _objectSpread({}, rest, {
        height,
        maxWeight: `${maxHeight}px`,
        maxWidth: `${maxWidth}px`
      })
    }, restOfProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), domNode);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditTextArea);

/***/ }),

/***/ "./components/canvas/TextArea/style.ts":
/*!*********************************************!*\
  !*** ./components/canvas/TextArea/style.ts ***!
  \*********************************************/
/*! exports provided: textaAreaStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textaAreaStyle", function() { return textaAreaStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const textaAreaStyle = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
  position: absolute;
  z-index: 100;
  border-style: solid;
  border-width: 1.5px;
  border-color: #5ac2ff;
  margin: 0px;
  overflow: hidden;
  background: none;
  outline: none;
  resize: none;
`;

/***/ }),

/***/ "./components/canvas/Transformer/index.tsx":
/*!*************************************************!*\
  !*** ./components/canvas/Transformer/index.tsx ***!
  \*************************************************/
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
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\Transformer\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */




class TransformerComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "transformerRef", Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(this, "boundFoxFunction", (oldBox, newBox) => {
      const {
        minWidth
      } = this.props;
      const ref = this.transformerRef.current;
      const stageWidth = ref.getStage().width();

      if (newBox.width > stageWidth - 10) {
        const maxWidth = Math.min(newBox.width, stageWidth - 10);
        newBox.width = maxWidth;
      } else {
        const width = Math.max(minWidth, newBox.width);
        newBox.width = width;
      }

      return newBox;
    });
  }

  componentDidMount() {
    this.checkNode();
    this.props.onMount(this.transformerRef);
  }

  componentDidUpdate() {
    this.checkNode();
  }

  checkNode() {
    // We manually attach or detach a node to the Transformer
    const ref = this.transformerRef.current;
    const stage = ref.getStage();
    const {
      selectedShapeName
    } = this.props;
    const selectedNode = stage.findOne('.' + selectedShapeName); // do nothing if the selected node is already attached to the transformer

    if (selectedNode === ref.node()) {
      return;
    }

    if (selectedNode) {
      // attach transformer to another node
      ref.attachTo(selectedNode);
    } else {
      // remove current ref from the fransformer
      ref.detach();
    } // Trigger a draw for the layer


    ref.getLayer().batchDraw();
  }

  render() {
    const _this$props = this.props,
          {
      selectedShapeName
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["selectedShapeName"]);

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_2__["Transformer"], _extends({
      ref: this.transformerRef,
      enabledAnchors: ['middle-left', 'middle-right'],
      boundBoxFunc: this.boundFoxFunction
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }));
  }

}

_defineProperty(TransformerComponent, "defaultProps", {
  minWidth: 50
});

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

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
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextArea */ "./components/canvas/TextArea/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/canvas/style.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Text */ "./components/canvas/Text/index.tsx");
/* harmony import */ var _Transformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Transformer */ "./components/canvas/Transformer/index.tsx");
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
      canvasHeight: 750,
      canvasWidth: 500,
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
      } = this.state;
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
      canvasHeight,
      canvasWidth,
      showEditTextArea,
      editTextAreaProps,
      onTextAreaClosed
    } = this.state;
    const {
      canvasTexts,
      onRef,
      onTextChanged
    } = this.props;
    const {
      textBlocks,
      selectedTextBlock
    } = canvasTexts;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Elevation"].ONE,
      css: _style__WEBPACK_IMPORTED_MODULE_6__["canvasStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    },  false && false, showEditTextArea && textBlocks[selectedTextBlock].text && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onTextAreaClosed: onTextAreaClosed,
      onTextAreaChanged: onTextChanged,
      selectedtextblockid: selectedTextBlock,
      value: textBlocks[selectedTextBlock].text,
      style: editTextAreaProps,
      maxWidth: canvasWidth,
      maxHeight: canvasHeight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./components/canvas/style.ts":
/*!************************************!*\
  !*** ./components/canvas/style.ts ***!
  \************************************/
/*! exports provided: canvasStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasStyle", function() { return canvasStyle; });
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
    background: ghostwhite;
    border: solid 1px lightgray;
  }
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
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas/index.tsx");
/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LeftSideBar */ "./components/LeftSideBar/index.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./pages/styles.ts");
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
        'tamaño-mascota': false,
        'telefono-contacto': '',
        vacunas: false,
        'whatsapp-contacto': ''
      }
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
      this.setState({
        formValues: _objectSpread({}, this.state.formValues, {
          [key]: value
        })
      });
    });

    _defineProperty(this, "addTextBlock", () => {
      const {
        canvasTexts
      } = this.state;
      const {
        textBlocks
      } = canvasTexts;
      const id = nanoid__WEBPACK_IMPORTED_MODULE_2___default()();
      const newTextblock = {
        color: 'black',
        fontSize: 'medium',
        id,
        text: ''
      };
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
    this.addTextBlock();
  }

  render() {
    const {
      canvasImage,
      canvasTexts,
      formValues
    } = this.state;
    const {
      selectedTextBlock,
      textBlocks
    } = canvasTexts;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_6__["pageStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onImageUploaded: this.setCanvasImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      "data-name": "bodycontainer",
      css: _styles__WEBPACK_IMPORTED_MODULE_6__["containerStyle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      addTextBlock: this.addTextBlock,
      canvasRef: this.stageRef,
      formValues: formValues,
      onTextBlockInteracted: this.setSelectedTextBlock,
      selectedTextBlock: selectedTextBlock,
      textBlocks: textBlocks,
      onInputChanged: this.setAdoptionFormField,
      onTextChanged: this.onTextChanged,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_canvas__WEBPACK_IMPORTED_MODULE_3__["default"], {
      canvasRef: this.stageRef,
      canvasTexts: canvasTexts,
      currentCanvasText: textBlocks[selectedTextBlock],
      image: canvasImage,
      onRef: this.stageRef,
      onTextChanged: this.onTextBlockChanged,
      onTextBlockSelected: this.setSelectedTextBlock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
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

/***/ 4:
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

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

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