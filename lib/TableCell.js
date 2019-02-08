
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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TCell, _React$Component);

  function TCell() {
    (0, _classCallCheck2.default)(this, TCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TCell).apply(this, arguments));
  }

  (0, _createClass2.default)(TCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          column = _this$props.column,
          record = _this$props.record,
          index = _this$props.index;
      var render = column.render;
      return _react.default.createElement("td", null, _react.default.createElement("div", null, typeof render === 'function' ? render(record, column, index) : record[column.dataIndex]));
    }
  }]);
  return TCell;
}(_react.default.Component);

exports.default = TCell;
(0, _defineProperty2.default)(TCell, "propTypes", {
  column: _propTypes.default.object.isRequired,
  record: _propTypes.default.object.isRequired,
  index: _propTypes.default.number.isRequired
});
(0, _defineProperty2.default)(TCell, "defaultProps", {
  columns: {},
  record: {},
  index: 0
});