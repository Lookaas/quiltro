webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/canvas/CharacteristicsLayer/index.tsx":
/*!**********************************************************!*\
  !*** ./components/canvas/CharacteristicsLayer/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-konva */ "./node_modules/react-konva/lib/ReactKonva.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\CharacteristicsLayer\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

/** @jsx jsx */




var CharacteristicsLayer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CharacteristicsLayer, _Component);

  function CharacteristicsLayer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CharacteristicsLayer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacteristicsLayer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CharacteristicsLayer, [{
    key: "setPosition",
    value: function setPosition() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canvasHeight = _this$props.canvasHeight,
          canvasWidth = _this$props.canvasWidth,
          characteristics = _this$props.characteristics;
      var layerWidth = canvasWidth * 0.7;
      var layerHeigth = canvasHeight * 0.1;
      console.log(characteristics);

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(characteristics);

      console.log(characteristics[keys[0]]);
      var offsetDelta = 0.08;
      var xOffset = layerWidth * offsetDelta * (6 - keys.length);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Group"], {
        x: canvasWidth * 0.05,
        y: canvasHeight * 0.7,
        height: layerHeigth,
        width: layerHeigth,
        visible: true,
        draggable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(characteristics).sort().map(function (charKey, index) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Group"], {
          width: layerWidth * 0.16,
          height: layerHeigth,
          x: xOffset + index * layerWidth * 0.16,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Path"], {
          data: characteristics[charKey].icon,
          fill: 'red',
          scaleX: 0.08,
          scaleY: 0.08,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Label"], {
          y: layerHeigth - 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Tag"], {
          fill: "#fff",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          width: layerWidth * 0.16,
          text: characteristics[charKey].text,
          fontSize: 10,
          align: 'center',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        })));
      }));
    }
  }]);

  return CharacteristicsLayer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CharacteristicsLayer);

/***/ })

})
//# sourceMappingURL=index.js.c58c775c51a83901d4c5.hot-update.js.map