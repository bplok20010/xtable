
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Thead = _interopRequireDefault(require("./Thead"));

var _Tbody = _interopRequireDefault(require("./Tbody"));

var Table =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Table, _React$Component);

  function Table() {
    (0, _classCallCheck2.default)(this, Table);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Table).apply(this, arguments));
  }

  (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement("table", null, _react.default.createElement(_Thead.default, props), _react.default.createElement(_Tbody.default, props));
    }
  }]);
  return Table;
}(_react.default.Component);

exports.default = Table;
(0, _defineProperty2.default)(Table, "propTypes", {
  columns: _propTypes.default.array,
  data: _propTypes.default.array
});
(0, _defineProperty2.default)(Table, "defaultProps", {
  columns: [],
  data: []
});