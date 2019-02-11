
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