
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

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