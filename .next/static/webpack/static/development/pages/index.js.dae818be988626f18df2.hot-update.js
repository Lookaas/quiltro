webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar/ContactInformation/index.tsx":
/*!*************************************************************!*\
  !*** ./components/LeftSideBar/ContactInformation/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactInformation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/LeftSideBar/ContactInformation/style.ts");





var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\ContactInformation\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

/** @jsx jsx */





var ContactInformation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactInformation, _React$Component);

  function ContactInformation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactInformation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactInformation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactInformation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _onChange = _this$props.onChange,
          formValues = _this$props.formValues;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Elevation"].ONE,
        css: _style__WEBPACK_IMPORTED_MODULE_8__["sidebarContainerStyle"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["H4"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Datos de contacto"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        label: "Nombre *",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
        placeholder: "Nombre",
        name: "nombre-contacto",
        required: true,
        value: formValues['nombre-contacto'],
        onChange: function onChange(e) {
          _onChange('nombre-contacto', e.currentTarget.value);
        },
        leftIcon: "person",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        label: "Tel\xE9fono *",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
        placeholder: "Tel\xE9fono",
        name: "telefono-contacto",
        value: formValues['telefono-contacto'],
        onChange: function onChange(e) {
          _onChange('telefono-contacto', e.currentTarget.value);
        },
        leftIcon: "mobile-phone",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        label: "Email *",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
        name: "Email",
        type: "email-contacto",
        placeholder: "Email",
        value: formValues['email-contacto'],
        onChange: function onChange(e) {
          _onChange('email-contacto', e.currentTarget.value);
        },
        leftIcon: "inbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        label: "Ciudad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
        placeholder: "Ciudad",
        name: "ciudad-contacto",
        value: formValues['ciudad-contacto'],
        onChange: function onChange(e) {
          _onChange('ciudad-contacto', e.currentTarget.value);
        },
        leftIcon: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))));
    }
  }]);

  return ContactInformation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.dae818be988626f18df2.hot-update.js.map