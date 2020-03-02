webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/canvas/Text/index.tsx":
/*!******************************************!*\
  !*** ./components/canvas/Text/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-konva */ "./node_modules/react-konva/lib/ReactKonva.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Lucas\\Documents\\quiltros\\components\\canvas\\Text\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

/** @jsx jsx */




var CanvasText =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CanvasText, _React$Component);

  function CanvasText() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CanvasText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CanvasText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      fontSize: 10
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "transformerRef", Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getNewPosition", function (pos) {
      var _this$props = _this.props,
          maxWidth = _this$props.maxWidth,
          maxHeight = _this$props.maxHeight;
      var ref = _this.transformerRef.current;
      var topBorder = pos.y;
      var bottomBorder = pos.y + ref.height();
      var leftBorder = pos.x;
      var rightBorder = pos.x + ref.width();
      var x = pos.x;
      var y = pos.y;

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
        x: x,
        y: y
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onTransform", function () {
      var ref = _this.transformerRef.current;
      ref.setAttrs({
        scaleX: 1,
        width: ref.width() * ref.scaleX()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDrag", function (pos) {
      return _this.getNewPosition(pos);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CanvasText, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          text = _this$props2.text,
          color = _this$props2.color,
          onDoubleClick = _this$props2.onDoubleClick,
          onClick = _this$props2.onClick,
          onMouseDown = _this$props2.onMouseDown,
          position = _this$props2.position,
          align = _this$props2.align,
          width = _this$props2.width,
          style = _this$props2.style;
      var fontSize = this.state.fontSize;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_9__["Group"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        x: position.x,
        y: position.y,
        draggable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_9__["Tag"], {
        fill: "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_konva__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var stateFontSize = 10;
      var fontSize = props.fontSize;

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
  }]);

  return CanvasText;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CanvasText);

/***/ })

})
//# sourceMappingURL=index.js.9291e9ea08e7c61680b2.hot-update.js.map