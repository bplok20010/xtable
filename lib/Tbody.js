
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

var _classnames = _interopRequireDefault(require("classnames"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

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
    value: function renderCell(data, column, i) {
      return _react.default.createElement("td", {
        key: i
      }, _react.default.createElement("div", null, data[column.dataIndex]));
    }
  }, {
    key: "renderRow",
    value: function renderRow(data, i) {
      var columnStore = this.props.columnStore;
      var columns = columnStore.leafColumns;
      return _react.default.createElement("tr", {
        key: i
      }, columns.map(this.renderCell.bind(this, data)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          prefixCls = _this$props.prefixCls,
          rowKey = _this$props.rowKey,
          rowClassName = _this$props.rowClassName;
      var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-tbody"), true));
      var tableRows = data.map(function (record, index) {
        return _react.default.createElement(_TableRow.default, {
          index: index,
          record: record,
          rowKey: rowKey,
          rowClassName: rowClassName
        });
      });
      return _react.default.createElement("tbody", {
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