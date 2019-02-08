
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

var Colgroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Colgroup, _React$Component);

  function Colgroup() {
    (0, _classCallCheck2.default)(this, Colgroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Colgroup).apply(this, arguments));
  }

  (0, _createClass2.default)(Colgroup, [{
    key: "renderCol",
    value: function renderCol(column, i) {
      var style = {};

      if (column.width != null) {
        style.width = column.width;
      }

      return _react.default.createElement("col", {
        key: column.key,
        style: style
      });
    }
  }, {
    key: "render",
    value: function render() {
      var columnStore = this.props.columnStore;
      var columns = columnStore.leafColumns;
      return _react.default.createElement("colgroup", null, columns.map(this.renderCol.bind(this)));
    }
  }]);
  return Colgroup;
}(_react.default.Component);

exports.default = Colgroup;
(0, _defineProperty2.default)(Colgroup, "propTypes", {
  columnStore: _propTypes.default.object
});
(0, _defineProperty2.default)(Colgroup, "defaultProps", {
  columnStore: null
});