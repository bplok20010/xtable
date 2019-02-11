
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
  column: _propTypes.default.object,
  cellProps: _propTypes.default.object
});
(0, _defineProperty2.default)(TheadCell, "defaultProps", {
  cellProps: {}
});
(0, _defineProperty2.default)(TheadCell, "contextType", _TableContext.default);