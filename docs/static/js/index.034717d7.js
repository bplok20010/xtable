/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/Demo.js":
/*!**************************!*\
  !*** ./examples/Demo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DemoList = _interopRequireDefault(__webpack_require__(/*! ./DemoList */ "./examples/DemoList.js"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Demo, _Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      current: _DemoList.default[0]
    });
    return _this;
  }

  (0, _createClass2.default)(Demo, [{
    key: "onDemoChange",
    value: function onDemoChange(item, e) {
      this.setState({
        current: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "slider"
      }, _DemoList.default.map(function (item, i) {
        return _react.default.createElement("div", {
          className: current === item ? 'active' : '',
          onClick: _this2.onDemoChange.bind(_this2, item)
        }, item.label);
      })), _react.default.createElement("div", {
        className: "content"
      }, current ? _react.default.createElement(current.component, null) : null));
    }
  }]);
  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ "./examples/DemoList.js":
/*!******************************!*\
  !*** ./examples/DemoList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _demo = _interopRequireDefault(__webpack_require__(/*! ./demos/demo1 */ "./examples/demos/demo1.js"));

// import Demo2 from './demos/Demo2';
// import Demo3 from './demos/Demo3';
// import Demo4 from './demos/Demo4';
var _default = [{
  label: '基本功能',
  component: _demo.default
}];
exports.default = _default;

/***/ }),

/***/ "./examples/demos/demo1.js":
/*!*********************************!*\
  !*** ./examples/demos/demo1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _src = _interopRequireDefault(__webpack_require__(/*! ../../src */ "./src/index.js"));

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    (0, _classCallCheck2.default)(this, DEMO);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DEMO).apply(this, arguments));
  }

  (0, _createClass2.default)(DEMO, [{
    key: "getRowProps",
    value: function getRowProps(data, index) {
      if (index % 2) {
        return {
          className: 'odd'
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var columns = [{
        title: '日期',
        dataIndex: 'date',
        width: 100,
        align: 'center'
      }, {
        title: '姓名',
        dataIndex: 'name',
        align: 'left'
      }, {
        title: '基础信息',
        children: [{
          title: '年龄',
          dataIndex: 'age',
          align: 'right',
          getHeaderCellProps: function getHeaderCellProps() {
            return {
              colSpan: 0
            };
          }
        }, {
          title: '性别',
          dataIndex: 'gender',
          align: 'center',
          getHeaderCellProps: function getHeaderCellProps() {
            return {
              colSpan: 2
            };
          }
        }, {
          title: '电话号码',
          dataIndex: 'phone',
          align: 'right',
          render: function render(text) {
            return 'Tel:' + text;
          },
          renderHeader: function renderHeader(text) {
            return 'Tel:' + text;
          },
          getCellProps: function getCellProps(data) {
            return {
              onClick: function onClick() {
                alert(data['phone']);
              }
            };
          },
          getHeaderCellProps: function getHeaderCellProps(column) {
            return {
              onClick: function onClick() {
                alert(column['dataIndex']);
              }
            };
          }
        }, {
          title: '地址',
          dataIndex: 'address'
        }]
      }, {
        title: '描述',
        dataIndex: 'desc'
      }];
      var data = [];

      for (var i = 0; i < 50; i++) {
        data.push({
          date: '2019-02-08',
          name: '商汤',
          age: 22,
          gender: '男',
          phone: 13128989826,
          address: 'New York No. 1 Lake Park',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        });
      }

      return _react.default.createElement(_src.default, {
        columns: columns,
        data: data,
        style: {
          width: '100%'
        },
        showHeader: true,
        getRowProps: this.getRowProps,
        getHeaderRowProps: this.getRowProps
      });
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

__webpack_require__(/*! ./style/index.scss */ "./examples/style/index.scss");

__webpack_require__(/*! ./style/animate.scss */ "./examples/style/animate.scss");

__webpack_require__(/*! ../src/style/index.scss */ "./src/style/index.scss");

var _Demo = _interopRequireDefault(__webpack_require__(/*! ./Demo */ "./examples/Demo.js"));

_reactDom.default.render(_react.default.createElement(_Demo.default, null), demo);

/***/ }),

/***/ "./examples/style/animate.scss":
/*!*************************************!*\
  !*** ./examples/style/animate.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./examples/style/index.scss":
/*!***********************************!*\
  !*** ./examples/style/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ColGroup.js":
/*!*************************!*\
  !*** ./src/ColGroup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ./TableContext */ "./src/TableContext.js"));

var ColGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ColGroup, _React$Component);

  function ColGroup() {
    (0, _classCallCheck2.default)(this, ColGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ColGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(ColGroup, [{
    key: "renderCol",
    value: function renderCol(column, i) {
      var style = {};

      if (column.width != null) {
        style.width = column.width;
      }

      if (column.minWidth != null) {
        style.minWidth = column.minWidth;
      }

      if (column.maxWidth != null) {
        style.maxWidth = column.maxWidth;
      }

      return _react.default.createElement("col", {
        key: column.id || column.dataIndex || i,
        style: style
      });
    }
  }, {
    key: "render",
    value: function render() {
      var columnStore = this.context.columnStore;
      var columns = columnStore.leafColumns;
      return _react.default.createElement("colgroup", null, columns.map(this.renderCol.bind(this)));
    }
  }]);
  return ColGroup;
}(_react.default.Component);

exports.default = ColGroup;
(0, _defineProperty2.default)(ColGroup, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/Column.js":
/*!***********************!*\
  !*** ./src/Column.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function check(props, propTypes) {
  for (var prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      var err = propTypes[prop](props, prop, 'name', 'prop');

      if (err) {
        console.warn(err);
        return false;
      }
    }
  }

  return true;
}

var ColumnPropTypes = {
  className: _propTypes.default.string,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  dataIndex: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  minWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  render: _propTypes.default.func,
  renderHeader: _propTypes.default.func,
  fixed: _propTypes.default.oneOf([true, false, 'left', 'right']),
  align: _propTypes.default.oneOf(['center', 'left', 'right']),
  getHeaderCellProps: _propTypes.default.func,
  getCellProps: _propTypes.default.func
};
var ColumnDefaultProps = {
  rowSpan: 1,
  colSpan: 1,
  customHeaderCellProps: {}
};

var Column = function Column(props) {
  (0, _classCallCheck2.default)(this, Column);

  _propTypes.default.checkPropTypes(ColumnPropTypes, props, 'prop', 'Column');

  (0, _assign.default)(this, ColumnDefaultProps, props);

  if (props.renderHeader) {
    this.title = props.renderHeader(this.title, this);
  }

  if (props.getHeaderCellProps) {
    this.customHeaderCellProps = (0, _objectSpread2.default)({}, props.getHeaderCellProps(this));
  }
};

exports.default = Column;

/***/ }),

/***/ "./src/ColumnManager.js":
/*!******************************!*\
  !*** ./src/ColumnManager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _xtreeStore = _interopRequireDefault(__webpack_require__(/*! xtree-store */ "./node_modules/xtree-store/index.js"));

var _Column = _interopRequireDefault(__webpack_require__(/*! ./Column */ "./src/Column.js"));

var ColumnManager =
/*#__PURE__*/
function () {
  function ColumnManager(columns) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ColumnManager);
    (0, _defineProperty2.default)(this, "store", null);
    (0, _defineProperty2.default)(this, "_idx", 0);
    (0, _defineProperty2.default)(this, "groupHeaderData", []);
    this.store = new _xtreeStore.default(columns, {
      idField: 'id',
      childrenField: 'children',
      processNode: function processNode(node) {
        _this._idx++;
        return new _Column.default((0, _objectSpread2.default)({
          id: _this._idx
        }, node));
      }
    });
    this.groupHeaderData = this.genGroupHeaderData();
  }

  (0, _createClass2.default)(ColumnManager, [{
    key: "getNode",
    value: function getNode(id) {
      return this.store.getNode(id);
    }
  }, {
    key: "isLeaf",
    value: function isLeaf(id) {
      return this.store.isLeaf(id);
    }
  }, {
    key: "genGroupHeaderData",
    value: function genGroupHeaderData() {
      var store = this.store;
      var MaxRows = store.getMaxDepth();
      var rows = [];

      var _loop = function _loop(i) {
        rows[i] = [];
        var nodes = store.getDepthNodes(i + 1); //.map(node => node.id);

        nodes.forEach(function (node) {
          var id = node.id;
          var leafs = store.getAllChildren(id).filter(function (node) {
            return node.leaf;
          });
          var isLeaf = node.leaf;
          var rowSpan = 1;
          var colSpan = leafs.length;

          if (isLeaf) {
            var pNodes = store.getParentNodes(id);
            rowSpan = MaxRows - pNodes.length;
            colSpan = 1;
          }

          node.rowSpan = rowSpan;
          node.colSpan = colSpan;
          rows[i].push(node);
        });
      };

      for (var i = 0; i < MaxRows; i++) {
        _loop(i);
      }

      return rows;
    }
  }, {
    key: "leafColumns",
    get: function get() {
      var _this2 = this;

      return this.store.getAllChildren().filter(function (node) {
        return _this2.store.isLeaf(node.id);
      });
    }
  }]);
  return ColumnManager;
}();

exports.default = ColumnManager;

/***/ }),

/***/ "./src/Table.js":
/*!**********************!*\
  !*** ./src/Table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableContext", {
  enumerable: true,
  get: function get() {
    return _TableContext.default;
  }
});
Object.defineProperty(exports, "ColumnManager", {
  enumerable: true,
  get: function get() {
    return _ColumnManager.default;
  }
});
Object.defineProperty(exports, "ColGroup", {
  enumerable: true,
  get: function get() {
    return _ColGroup.default;
  }
});
Object.defineProperty(exports, "Thead", {
  enumerable: true,
  get: function get() {
    return _Thead.default;
  }
});
Object.defineProperty(exports, "Tbody", {
  enumerable: true,
  get: function get() {
    return _Tbody.default;
  }
});
Object.defineProperty(exports, "TheadRow", {
  enumerable: true,
  get: function get() {
    return _TheadRow.default;
  }
});
Object.defineProperty(exports, "TheadCell", {
  enumerable: true,
  get: function get() {
    return _TheadCell.default;
  }
});
Object.defineProperty(exports, "TbodyRow", {
  enumerable: true,
  get: function get() {
    return _TbodyRow.default;
  }
});
Object.defineProperty(exports, "TbodyCell", {
  enumerable: true,
  get: function get() {
    return _TbodyCell.default;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ./TableContext */ "./src/TableContext.js"));

var _ColumnManager = _interopRequireDefault(__webpack_require__(/*! ./ColumnManager */ "./src/ColumnManager.js"));

var _ColGroup = _interopRequireDefault(__webpack_require__(/*! ./ColGroup */ "./src/ColGroup.js"));

var _Thead = _interopRequireDefault(__webpack_require__(/*! ./Thead */ "./src/Thead.js"));

var _Tbody = _interopRequireDefault(__webpack_require__(/*! ./Tbody */ "./src/Tbody.js"));

var _TheadRow = _interopRequireDefault(__webpack_require__(/*! ./components/TheadRow */ "./src/components/TheadRow.js"));

var _TheadCell = _interopRequireDefault(__webpack_require__(/*! ./components/TheadCell */ "./src/components/TheadCell.js"));

var _TbodyRow = _interopRequireDefault(__webpack_require__(/*! ./components/TbodyRow */ "./src/components/TbodyRow.js"));

var _TbodyCell = _interopRequireDefault(__webpack_require__(/*! ./components/TbodyCell */ "./src/components/TbodyCell.js"));

var defaultComponents = {
  table: 'table',
  thead: {
    wrapper: 'thead',
    row: _TheadRow.default,
    cell: _TheadCell.default
  },
  tbody: {
    wrapper: 'tbody',
    row: _TbodyRow.default,
    cell: _TbodyCell.default
  }
};

var Table =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Table, _React$Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      columns: [],
      columnStore: null
    });
    return _this;
  }

  (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      var _cx;

      var props = this.props;
      var _this$props = this.props,
          components = _this$props.components,
          prefixCls = _this$props.prefixCls,
          tableLayout = _this$props.tableLayout,
          className = _this$props.className,
          style = _this$props.style,
          showHeader = _this$props.showHeader,
          showBody = _this$props.showBody;
      var columnStore = this.state.columnStore;
      var classes = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, prefixCls, true), (0, _defineProperty2.default)(_cx, className, className), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), _cx));
      var newComponents = (0, _merge.default)({}, components, defaultComponents);
      var TableComponent = newComponents.table;
      return _react.default.createElement(_TableContext.default.Provider, {
        value: (0, _objectSpread2.default)({}, props, {
          columnStore: columnStore,
          components: newComponents
        })
      }, _react.default.createElement(TableComponent, {
        className: classes,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0,
        style: style
      }, _react.default.createElement(_ColGroup.default, {
        columnStore: columnStore
      }), showHeader ? _react.default.createElement(_Thead.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      })) : null, showBody ? _react.default.createElement(_Tbody.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      })) : null));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.columnStore) {
        return {
          columnStore: nextProps.columnStore
        };
      }

      if (nextProps.columns !== prevState.columns) {
        return {
          columns: nextProps.columns,
          columnStore: new _ColumnManager.default(nextProps.columns)
        };
      }
    }
  }]);
  return Table;
}(_react.default.Component);

exports.default = Table;
(0, _defineProperty2.default)(Table, "propTypes", {
  prefixCls: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  components: _propTypes.default.object,
  columns: _propTypes.default.array,
  columnStore: _propTypes.default.object,
  data: _propTypes.default.array,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto']),
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  rowClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  showHeader: _propTypes.default.bool,
  showBody: _propTypes.default.bool,
  getHeaderRowProps: _propTypes.default.func,
  getRowProps: _propTypes.default.func
});
(0, _defineProperty2.default)(Table, "defaultProps", {
  prefixCls: 'xtable',
  tableLayout: 'auto',
  className: '',
  style: {},
  components: defaultComponents,

  /**
   * @param {array<Column>}
   */
  columns: [],
  data: [],
  rowClassName: '',
  showHeader: true,
  showBody: true,
  getHeaderRowProps: null,
  getRowProps: null
});

/***/ }),

/***/ "./src/TableContext.js":
/*!*****************************!*\
  !*** ./src/TableContext.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var TableContext = _react.default.createContext({});

var _default = TableContext;
exports.default = _default;

/***/ }),

/***/ "./src/Tbody.js":
/*!**********************!*\
  !*** ./src/Tbody.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ./TableContext */ "./src/TableContext.js"));

var Tbody =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tbody, _React$Component);

  function Tbody() {
    (0, _classCallCheck2.default)(this, Tbody);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tbody).apply(this, arguments));
  }

  (0, _createClass2.default)(Tbody, [{
    key: "renderCell",
    value: function renderCell(record, column, index) {
      var _cx;

      var _this$context = this.context,
          prefixCls = _this$context.prefixCls,
          components = _this$context.components;
      var dataIndex = column.dataIndex,
          render = column.render;
      var TbodyCell = components.tbody.cell;
      var className = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, column.className, column.className), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), _cx));
      var tdProps = {};
      var colSpan;
      var rowSpan;
      var text;

      if (typeof dataIndex === 'number') {
        text = (0, _get.default)(record, dataIndex);
      } else if (!dataIndex || dataIndex.length === 0) {
        text = record;
      } else {
        text = (0, _get.default)(record, dataIndex);
      }

      if (render) {
        text = render(text, record, index, column);
      }

      if (column.getCellProps) {
        tdProps = (0, _objectSpread2.default)({}, column.getCellProps(record, index));
        colSpan = tdProps.colSpan;
        rowSpan = tdProps.rowSpan;
      }

      tdProps.className = (0, _classnames.default)(className, tdProps.className);

      if (rowSpan === 0 || colSpan === 0) {
        return null;
      }

      return _react.default.createElement(TbodyCell, {
        column: column,
        record: record,
        index: index,
        key: column.id || column.dataIndex || index,
        cellProps: tdProps
      }, text);
    }
  }, {
    key: "renderRow",
    value: function renderRow(record, index, rowKey) {
      var _this$context2 = this.context,
          columnStore = _this$context2.columnStore,
          prefixCls = _this$context2.prefixCls,
          getRowProps = _this$context2.getRowProps,
          rowClassName = _this$context2.rowClassName,
          components = _this$context2.components;
      var TbodyRow = components.tbody.row;
      var columns = columnStore.leafColumns;
      var customRowProps = {};

      if (getRowProps) {
        customRowProps = (0, _objectSpread2.default)({}, getRowProps(record, index));
      }

      customRowProps.className = (0, _classnames.default)("".concat(prefixCls, "-row"), customRowProps.className, typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName);
      return _react.default.createElement(TbodyRow, {
        rowProps: (0, _objectSpread2.default)({}, customRowProps, {
          'data-row-index': index,
          'data-row-key': rowKey
        }),
        key: rowKey,
        rowKey: rowKey,
        index: index,
        record: record
      }, columns.map(this.renderCell.bind(this, record)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          prefixCls = _this$props.prefixCls;
      var _this$context3 = this.context,
          rowKey = _this$context3.rowKey,
          components = _this$context3.components;
      var TbodyWrapper = components.tbody.wrapper;
      var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-tbody"), true));
      var tableRows = data.map(function (record, index) {
        var rkey = rowKey == null ? index : record[rowKey];

        if (typeof rowKey === 'function') {
          rkey = rowKey(record);
        }

        return _this.renderRow(record, index, rkey);
      });
      return _react.default.createElement(TbodyWrapper, {
        className: classes
      }, tableRows);
    }
  }]);
  return Tbody;
}(_react.default.Component);

exports.default = Tbody;
(0, _defineProperty2.default)(Tbody, "propTypes", {
  columns: _propTypes.default.array,
  data: _propTypes.default.array
});
(0, _defineProperty2.default)(Tbody, "defaultProps", {
  columns: [],
  data: []
});
(0, _defineProperty2.default)(Tbody, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/Thead.js":
/*!**********************!*\
  !*** ./src/Thead.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ./TableContext */ "./src/TableContext.js"));

var Thead =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Thead, _React$Component);

  function Thead() {
    (0, _classCallCheck2.default)(this, Thead);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Thead).apply(this, arguments));
  }

  (0, _createClass2.default)(Thead, [{
    key: "renderCell",
    value: function renderCell(column, i) {
      var _cx;

      var _this$context = this.context,
          prefixCls = _this$context.prefixCls,
          components = _this$context.components;
      var TheadCellComponent = components.thead.cell;
      var title = column.title,
          className = column.className,
          customHeaderCellProps = column.customHeaderCellProps,
          rowSpan = column.rowSpan,
          colSpan = column.colSpan;
      var classes = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, className, className), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-column-leaf"), column.leaf), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), (0, _defineProperty2.default)(_cx, "".concat(customHeaderCellProps.className), customHeaderCellProps.className), _cx));

      if (customHeaderCellProps.rowSpan === 0 || customHeaderCellProps.colSpan === 0) {
        return null;
      }

      var cellProps = (0, _objectSpread2.default)({
        rowSpan: rowSpan,
        colSpan: colSpan
      }, customHeaderCellProps, {
        className: classes
      });
      return _react.default.createElement(TheadCellComponent, {
        cellProps: cellProps,
        column: column,
        key: column.id || column.dataIndex || i
      }, _react.default.createElement("div", null, title));
    }
  }, {
    key: "renderRow",
    value: function renderRow(row, index) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          components = _this$context2.components,
          getHeaderRowProps = _this$context2.getHeaderRowProps;
      var TheadRowComponent = components.thead.row;
      var rowProps = {};

      if (getHeaderRowProps) {
        rowProps = (0, _objectSpread2.default)({}, getHeaderRowProps(row, index));
      }

      rowProps.className = (0, _classnames.default)("".concat(prefixCls, "-thead-row"), rowProps.className);
      return _react.default.createElement(TheadRowComponent, {
        rowProps: rowProps,
        key: index,
        row: row
      }, row.map(this.renderCell.bind(this)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context3 = this.context,
          prefixCls = _this$context3.prefixCls,
          columnStore = _this$context3.columnStore,
          components = _this$context3.components;
      var TheadComponent = components.thead.wrapper;
      var rows = columnStore.groupHeaderData;
      var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-thead"), true));
      return _react.default.createElement(TheadComponent, {
        className: classes
      }, rows.map(this.renderRow.bind(this)));
    }
  }]);
  return Thead;
}(_react.default.Component);

exports.default = Thead;
(0, _defineProperty2.default)(Thead, "propTypes", {
  columns: _propTypes.default.array
});
(0, _defineProperty2.default)(Thead, "defaultProps", {
  columns: []
});
(0, _defineProperty2.default)(Thead, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/components/TbodyCell.js":
/*!*************************************!*\
  !*** ./src/components/TbodyCell.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../TableContext */ "./src/TableContext.js"));

var TbodyCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TbodyCell, _React$Component);

  function TbodyCell() {
    (0, _classCallCheck2.default)(this, TbodyCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TbodyCell).apply(this, arguments));
  }

  (0, _createClass2.default)(TbodyCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cellProps = _this$props.cellProps,
          children = _this$props.children;
      return _react.default.createElement("td", cellProps, children);
    }
  }]);
  return TbodyCell;
}(_react.default.Component);

exports.default = TbodyCell;
(0, _defineProperty2.default)(TbodyCell, "propTypes", {
  className: _propTypes.default.string,
  column: _propTypes.default.object.isRequired,
  record: _propTypes.default.object.isRequired,
  index: _propTypes.default.number.isRequired,
  cellProps: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(TbodyCell, "defaultProps", {
  column: {},
  record: {},
  index: 0,
  cellProps: {}
});
(0, _defineProperty2.default)(TbodyCell, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/components/TbodyRow.js":
/*!************************************!*\
  !*** ./src/components/TbodyRow.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../TableContext */ "./src/TableContext.js"));

var TableRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TableRow, _React$Component);

  function TableRow() {
    (0, _classCallCheck2.default)(this, TableRow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableRow).apply(this, arguments));
  }

  (0, _createClass2.default)(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rowProps = _this$props.rowProps;
      return _react.default.createElement("tr", rowProps, children);
    }
  }]);
  return TableRow;
}(_react.default.Component);

exports.default = TableRow;
(0, _defineProperty2.default)(TableRow, "propTypes", {
  rowKey: _propTypes.default.any,
  record: _propTypes.default.object.isRequired,
  index: _propTypes.default.number.isRequired,
  rowProps: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(TableRow, "defaultProps", {
  rowProps: {},
  record: {},
  index: 0
});
(0, _defineProperty2.default)(TableRow, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/components/TheadCell.js":
/*!*************************************!*\
  !*** ./src/components/TheadCell.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../TableContext */ "./src/TableContext.js"));

var TheadCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TheadCell, _React$Component);

  function TheadCell() {
    (0, _classCallCheck2.default)(this, TheadCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TheadCell).apply(this, arguments));
  }

  (0, _createClass2.default)(TheadCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cellProps = _this$props.cellProps,
          children = _this$props.children;
      return _react.default.createElement("th", cellProps, children);
    }
  }]);
  return TheadCell;
}(_react.default.Component);

exports.default = TheadCell;
(0, _defineProperty2.default)(TheadCell, "propTypes", {
  column: _propTypes.default.object.isRequired,
  cellProps: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(TheadCell, "defaultProps", {
  cellProps: {}
});
(0, _defineProperty2.default)(TheadCell, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/components/TheadRow.js":
/*!************************************!*\
  !*** ./src/components/TheadRow.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../TableContext */ "./src/TableContext.js"));

var TheadRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TheadRow, _React$Component);

  function TheadRow() {
    (0, _classCallCheck2.default)(this, TheadRow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TheadRow).apply(this, arguments));
  }

  (0, _createClass2.default)(TheadRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rowProps = _this$props.rowProps;
      return _react.default.createElement("tr", rowProps, children);
    }
  }]);
  return TheadRow;
}(_react.default.Component);

exports.default = TheadRow;
(0, _defineProperty2.default)(TheadRow, "propTypes", {
  rowProps: _propTypes.default.object.isRequired,
  row: _propTypes.default.array.isRequired
});
(0, _defineProperty2.default)(TheadRow, "defaultProps", {
  rowProps: {},
  row: []
});
(0, _defineProperty2.default)(TheadRow, "contextType", _TableContext.default);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Table = _interopRequireDefault(__webpack_require__(/*! ./Table */ "./src/Table.js"));

// import React from 'react';
var _default = _Table.default; // export default class extends React.Component {
//     static propTypes = {
//         prefixCls: PropTypes.string,
//         columns: PropTypes.array,
//         data: PropTypes.array,
//         tableLayout: PropTypes.oneOf(['fixed', 'auto']),
//     }
//     static defaultProps = {
//         prefixCls: 'rw-table',
//         tableLayout: 'auto',
//         columns: [],
//         data: [],
//     }
//     render() {
//         const props = this.props;
//         const { prefixCls } = this.props;
//         const classes = cx({
//             [prefixCls]: true
//         })
//         return (
//             <div
//                 {...props}
//                 className={classes}
//             >
//                 <Table />
//             </div>
//         );
//     }
// }

exports.default = _default;

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./node_modules/packez/lib/fetchPolyfills.js ./node_modules/packez/lib/polyfills.js ./examples/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\wamp\www\github-projects\xtable\node_modules\packez\lib\fetchPolyfills.js */"./node_modules/packez/lib/fetchPolyfills.js");
__webpack_require__(/*! D:\wamp\www\github-projects\xtable\node_modules\packez\lib\polyfills.js */"./node_modules/packez/lib/polyfills.js");
module.exports = __webpack_require__(/*! D:\wamp\www\github-projects\xtable\examples\index.js */"./examples/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.034717d7.js.map