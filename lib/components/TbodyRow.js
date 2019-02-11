
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

var _TableContext = _interopRequireDefault(require("../TableContext"));

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