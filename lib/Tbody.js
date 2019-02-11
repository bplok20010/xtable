
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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _TableContext = _interopRequireDefault(require("./TableContext"));

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
    } // render2() {
    //     const { data, prefixCls } = this.props;
    //     const { rowKey, columnStore } = this.context;
    //     const classes = cx({
    //         [`${prefixCls}-tbody`]: true
    //     });
    //     const tableRows = data.map((record, index) => {
    //         let rkey = rowKey == null ? index : record[rowKey];
    //         if (typeof rowKey === 'function') {
    //             rkey = rowKey(record);
    //         }
    //         return (
    //             <TbodyRow
    //                 key={rkey}
    //                 rowKey={rkey}
    //                 index={index}
    //                 record={record}
    //             />
    //         )
    //     });
    //     return (
    //         <tbody className={classes}>
    //             {tableRows}
    //         </tbody>
    //     );
    // }

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