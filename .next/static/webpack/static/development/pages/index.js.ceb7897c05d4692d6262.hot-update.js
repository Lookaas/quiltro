webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar/index.tsx":
/*!******************************************!*\
  !*** ./components/LeftSideBar/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftSidebar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _ContactInformation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContactInformation */ "./components/LeftSideBar/ContactInformation/index.tsx");
/* harmony import */ var _PetInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PetInformation */ "./components/LeftSideBar/PetInformation/index.tsx");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubmitButton */ "./components/LeftSideBar/SubmitButton/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./components/LeftSideBar/styles.ts");








var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\LeftSideBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

/** @jsx jsx */







var LeftSidebar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LeftSidebar, _Component);

  function LeftSidebar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LeftSidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LeftSidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      isFormValid: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getDataByKey", function (form, key) {
      return form[key].toString();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getFormData", function () {
      var formData = new FormData();
      var formValues = _this.props.formValues;

      for (var _key2 in formValues) {
        if (formValues.hasOwnProperty(_key2)) {
          var element = _this.getDataByKey(formValues, _key2);

          formData.append(_key2, element);
        }
      }

      var imageBlob = _this.onExportImageClicked();

      formData.append('image', imageBlob);
      return {
        formData: formData,
        formJson: formValues
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "dataURItoBlob", function (dataURI) {
      var byteString;
      var mimestring;

      if (dataURI.split(',')[0].indexOf('base64') !== -1) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = decodeURI(dataURI.split(',')[1]);
      }

      mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var content = new Array();

      for (var i = 0; i < byteString.length; i++) {
        content[i] = byteString.charCodeAt(i);
      }

      return new Blob([new Uint8Array(content)], {
        type: mimestring
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onExportImageClicked", function () {
      var imgB64 = _this.props.canvasRef.current.toDataURL({
        pixelRatio: 2
      });

      var blob = _this.dataURItoBlob(imgB64);

      return blob;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(e) {
      var imgB64, link;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              imgB64 = _this.props.canvasRef.current.toDataURL({
                pixelRatio: 2
              });
              link = document.createElement('a');
              link.download = "Test.png";
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

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFormChange", function (e) {
      var isFormValid = e.currentTarget.checkValidity();

      _this.setState({
        isFormValid: isFormValid
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onTextChanged = _this$props.onTextChanged,
          formValues = _this$props.formValues,
          onInputChanged = _this$props.onInputChanged,
          onTextBlockInteracted = _this$props.onTextBlockInteracted,
          selectedTextBlock = _this$props.selectedTextBlock,
          addTextBlock = _this$props.addTextBlock,
          textBlocks = _this$props.textBlocks,
          addTextBlockWithData = _this$props.addTextBlockWithData;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("form", {
        onSubmit: this.onSubmit,
        onChange: this.onFormChange,
        css: _styles__WEBPACK_IMPORTED_MODULE_13__["containerStyle"],
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_PetInformation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: onInputChanged,
        formValues: formValues,
        addText: addTextBlockWithData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ContactInformation__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: onInputChanged,
        formValues: formValues,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_SubmitButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })));
    }
  }]);

  return LeftSidebar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ceb7897c05d4692d6262.hot-update.js.map