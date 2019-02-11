
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function check(props, propTypes) {
  for (var prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      var err = propTypes[prop](props, prop, 'name', 'prop');

      if (err) {
        console.warn(err);
        return false;
      }
    }
  }

  return true;
}

var ColumnPropTypes = {
  className: _propTypes.default.string,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  dataIndex: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  minWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  render: _propTypes.default.func,
  renderHeader: _propTypes.default.func,
  fixed: _propTypes.default.oneOf([true, false, 'left', 'right']),
  align: _propTypes.default.oneOf(['center', 'left', 'right']),
  getHeaderCellProps: _propTypes.default.func,
  getCellProps: _propTypes.default.func
};
var ColumnDefaultProps = {
  rowSpan: 1,
  colSpan: 1,
  customHeaderCellProps: {}
};

var Column = function Column(props) {
  (0, _classCallCheck2.default)(this, Column);

  _propTypes.default.checkPropTypes(ColumnPropTypes, props, 'prop', 'Column');

  (0, _assign.default)(this, ColumnDefaultProps, props);

  if (props.renderHeader) {
    this.title = props.renderHeader(this);
  }

  if (props.getHeaderCellProps) {
    this.customHeaderCellProps = (0, _objectSpread2.default)({}, props.getHeaderCellProps(this));
  }
};

exports.default = Column;