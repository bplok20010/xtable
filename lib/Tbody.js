
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
      }, data[column.dataIndex]);
    }
  }, {
    key: "renderRow",
    value: function renderRow(data, i) {
      var columns = this.props.columns;
      return _react.default.createElement("tr", {
        key: i
      }, columns.map(this.renderCell.bind(this, data)));
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement("tbody", null, data.map(this.renderRow.bind(this)));
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