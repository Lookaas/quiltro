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
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //e.preventDefault();
              console.log("Ahhhhh");
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

            case 1:
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_PetInformation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: onInputChanged,
        formValues: formValues,
        addText: addTextBlockWithData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ContactInformation__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: onInputChanged,
        formValues: formValues,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_SubmitButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })));
    }
  }]);

  return LeftSidebar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./node_modules/@blueprintjs/core/lib/esm/common/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@blueprintjs/core/lib/esm/common/index.js ***!
  \****************************************************************/
/*! exports provided: AbstractComponent, AbstractComponent2, AbstractPureComponent, AbstractPureComponent2, Alignment, Boundary, Colors, Elevation, Intent, Position, isPositionHorizontal, isPositionVertical, getPositionIgnoreAngles, DISPLAYNAME_PREFIX, removeNonHTMLProps, Classes, Keys, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractComponent */ "./node_modules/@blueprintjs/core/lib/esm/common/abstractComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return _abstractComponent__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"]; });

/* harmony import */ var _abstractComponent2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractComponent2 */ "./node_modules/@blueprintjs/core/lib/esm/common/abstractComponent2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent2", function() { return _abstractComponent2__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent2"]; });

/* harmony import */ var _abstractPureComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractPureComponent */ "./node_modules/@blueprintjs/core/lib/esm/common/abstractPureComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractPureComponent", function() { return _abstractPureComponent__WEBPACK_IMPORTED_MODULE_2__["AbstractPureComponent"]; });

/* harmony import */ var _abstractPureComponent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstractPureComponent2 */ "./node_modules/@blueprintjs/core/lib/esm/common/abstractPureComponent2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractPureComponent2", function() { return _abstractPureComponent2__WEBPACK_IMPORTED_MODULE_3__["AbstractPureComponent2"]; });

/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alignment */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alignment", function() { return _alignment__WEBPACK_IMPORTED_MODULE_4__["Alignment"]; });

/* harmony import */ var _boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boundary */ "./node_modules/@blueprintjs/core/lib/esm/common/boundary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return _boundary__WEBPACK_IMPORTED_MODULE_5__["Boundary"]; });

/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors */ "./node_modules/@blueprintjs/core/lib/esm/common/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_6__["Colors"]; });

/* harmony import */ var _elevation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elevation */ "./node_modules/@blueprintjs/core/lib/esm/common/elevation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elevation", function() { return _elevation__WEBPACK_IMPORTED_MODULE_7__["Elevation"]; });

/* harmony import */ var _intent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intent */ "./node_modules/@blueprintjs/core/lib/esm/common/intent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intent", function() { return _intent__WEBPACK_IMPORTED_MODULE_8__["Intent"]; });

/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./position */ "./node_modules/@blueprintjs/core/lib/esm/common/position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _position__WEBPACK_IMPORTED_MODULE_9__["Position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPositionHorizontal", function() { return _position__WEBPACK_IMPORTED_MODULE_9__["isPositionHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPositionVertical", function() { return _position__WEBPACK_IMPORTED_MODULE_9__["isPositionVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPositionIgnoreAngles", function() { return _position__WEBPACK_IMPORTED_MODULE_9__["getPositionIgnoreAngles"]; });

/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./props */ "./node_modules/@blueprintjs/core/lib/esm/common/props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISPLAYNAME_PREFIX", function() { return _props__WEBPACK_IMPORTED_MODULE_10__["DISPLAYNAME_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNonHTMLProps", function() { return _props__WEBPACK_IMPORTED_MODULE_10__["removeNonHTMLProps"]; });

/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes */ "./node_modules/@blueprintjs/core/lib/esm/common/classes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Classes", function() { return _classes__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keys */ "./node_modules/@blueprintjs/core/lib/esm/common/keys.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/@blueprintjs/core/lib/esm/common/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */















// NOTE: Errors is not exported in public API
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@blueprintjs/core/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@blueprintjs/core/lib/esm/index.js ***!
  \*********************************************************/
/*! exports provided: FocusStyleManager, AbstractComponent, AbstractComponent2, AbstractPureComponent, AbstractPureComponent2, Alignment, Boundary, Colors, Elevation, Intent, Position, isPositionHorizontal, isPositionVertical, getPositionIgnoreAngles, DISPLAYNAME_PREFIX, removeNonHTMLProps, Classes, Keys, Utils, ContextMenu, Alert, Breadcrumb, Breadcrumbs, Button, AnchorButton, ButtonGroup, Callout, Card, AnimationStates, Collapse, CollapsibleList, ContextMenuTarget, Dialog, Divider, Drawer, EditableText, ControlGroup, Switch, Radio, Checkbox, FileInput, FormGroup, InputGroup, NumericInput, RadioGroup, TextArea, H1, H2, H3, H4, H5, H6, Blockquote, Code, Pre, Label, OL, UL, HTMLSelect, HTMLTable, Hotkey, KeyCombo, HotkeysTarget, comboMatches, getKeyCombo, getKeyComboString, parseKeyCombo, hideHotkeysDialog, setHotkeysDialogProps, Hotkeys, Icon, Menu, MenuDivider, MenuItem, Navbar, NavbarDivider, NavbarGroup, NavbarHeading, NonIdealState, OverflowDirection, OverflowList, Overlay, Text, PanelStack, PopoverInteractionKind, Popover, PopoverPosition, Portal, ProgressBar, ResizeSensor, HandleType, HandleInteractionKind, MultiSlider, RangeSlider, Slider, Spinner, Tab, Expander, Tabs, Tag, TagInput, Toast, Toaster, Tooltip, Tree, TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibility */ "./node_modules/@blueprintjs/core/lib/esm/accessibility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusStyleManager", function() { return _accessibility__WEBPACK_IMPORTED_MODULE_0__["FocusStyleManager"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@blueprintjs/core/lib/esm/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent2", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractPureComponent", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["AbstractPureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractPureComponent2", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["AbstractPureComponent2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alignment", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Alignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Boundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elevation", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Elevation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intent", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Intent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPositionHorizontal", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["isPositionHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPositionVertical", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["isPositionVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPositionIgnoreAngles", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["getPositionIgnoreAngles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISPLAYNAME_PREFIX", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["DISPLAYNAME_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNonHTMLProps", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["removeNonHTMLProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Classes", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Classes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/@blueprintjs/core/lib/esm/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnchorButton", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["AnchorButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Callout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStates", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["AnimationStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Collapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsibleList", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["CollapsibleList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTarget", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextMenuTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Drawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["EditableText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ControlGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["FileInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["InputGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NumericInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["TextArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["H6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blockquote", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Blockquote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Code"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Pre"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OL", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["OL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UL", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["UL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLSelect", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["HTMLSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLTable", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hotkey", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCombo", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["KeyCombo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysTarget", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["HotkeysTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comboMatches", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["comboMatches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyCombo", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["getKeyCombo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyComboString", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["getKeyComboString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseKeyCombo", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["parseKeyCombo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHotkeysDialog", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["hideHotkeysDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHotkeysDialogProps", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["setHotkeysDialogProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hotkeys", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Hotkeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuDivider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["MenuDivider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Navbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarDivider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NavbarDivider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NavbarGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarHeading", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NavbarHeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonIdealState", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NonIdealState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowDirection", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["OverflowDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowList", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["OverflowList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStack", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["PanelStack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverInteractionKind", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["PopoverInteractionKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverPosition", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["PopoverPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Portal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeSensor", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ResizeSensor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandleType", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["HandleType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandleInteractionKind", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["HandleInteractionKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSlider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["MultiSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeSlider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["RangeSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Spinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expander", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Expander"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Tag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInput", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["TagInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Toaster"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Tree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["TreeNode"]; });

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=index.js.512c91d49d7e8303f1ff.hot-update.js.map