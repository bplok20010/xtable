
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

var _TableContext = _interopRequireDefault(require("./TableContext"));

var ColGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ColGroup, _React$Component);

  function ColGroup() {
    (0, _classCallCheck2.default)(this, ColGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ColGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(ColGroup, [{
    key: "renderCol",
    value: function renderCol(column, i) {
      var style = {};

      if (column.width != null) {
        style.width = column.width;
      }

      if (column.minWidth != null) {
        style.minWidth = column.minWidth;
      }

      if (column.maxWidth != null) {
        style.maxWidth = column.maxWidth;
      }

      return _react.default.createElement("col", {
        key: column.id || column.dataIndex || i,
        style: style
      });
    }
  }, {
    key: "render",
    value: function render() {
      var columnStore = this.context.columnStore;
      var columns = columnStore.leafColumns;
      return _react.default.createElement("colgroup", null, columns.map(this.renderCol.bind(this)));
    }
  }]);
  return ColGroup;
}(_react.default.Component);

exports.default = ColGroup;
(0, _defineProperty2.default)(ColGroup, "contextType", _TableContext.default);