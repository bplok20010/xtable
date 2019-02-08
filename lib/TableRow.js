
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

var _TableContext = _interopRequireDefault(require("./TableContext"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

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
          columns = _this$props.columns,
          record = _this$props.record,
          index = _this$props.index,
          rowKey = _this$props.rowKey,
          rowClassName = _this$props.rowClassName;
      var key = record[rowKey] == null ? index : record[rowKey];
      var className = typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName;

      if (typeof rowKey === 'function') {
        key = rowKey(record);
      }

      return _react.default.createElement("tr", {
        key: key,
        className: className
      }, columns.map(function (column) {
        return _react.default.createElement(_TableCell.default, {
          column: column,
          record: record,
          index: index
        });
      }));
    }
  }]);
  return TableRow;
}(_react.default.Component);

exports.default = TableRow;
(0, _defineProperty2.default)(TableRow, "propTypes", {
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  rowClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  column: _propTypes.default.object.isRequired,
  record: _propTypes.default.object.isRequired,
  index: _propTypes.default.number.isRequired
});
(0, _defineProperty2.default)(TableRow, "defaultProps", {
  rowClassName: '',
  rowKey: 'id',
  columns: {},
  record: {},
  index: 0
});
(0, _defineProperty2.default)(TableRow, "contextType", _TableContext.default);