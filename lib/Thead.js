
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

var Thead =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Thead, _React$Component);

  function Thead() {
    (0, _classCallCheck2.default)(this, Thead);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Thead).apply(this, arguments));
  }

  (0, _createClass2.default)(Thead, [{
    key: "renderColumn",
    value: function renderColumn(column, i) {
      var prefixCls = this.props.prefixCls;
      var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-cell"), true));
      return _react.default.createElement("th", {
        key: i
      }, _react.default.createElement("div", {
        className: classes
      }, column.title));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columnStore = _this$props.columnStore,
          prefixCls = _this$props.prefixCls;
      var results = columnStore.genGroupHeaderData();
      var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-thead"), true));
      return _react.default.createElement("thead", {
        className: classes
      }, results.map(function (row) {
        return _react.default.createElement("tr", null, row.map(function (cell) {
          var node = columnStore.getNode(cell.id);
          var classes = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-leaf"), columnStore.isLeaf(cell.id)));
          return _react.default.createElement("th", {
            className: classes,
            rowSpan: cell.rowSpan,
            colSpan: cell.colSpan
          }, node.title);
        }));
      }));
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