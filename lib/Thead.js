
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
      return _react.default.createElement("th", {
        key: i
      }, column.title);
    }
  }, {
    key: "render",
    value: function render() {
      var columns = this.props.columns;
      return _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map(this.renderColumn.bind(this))));
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