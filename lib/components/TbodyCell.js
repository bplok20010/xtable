
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
  cellProps: _propTypes.default.object
});
(0, _defineProperty2.default)(TbodyCell, "defaultProps", {
  column: {},
  record: {},
  index: 0,
  cellProps: {}
});
(0, _defineProperty2.default)(TbodyCell, "contextType", _TableContext.default);