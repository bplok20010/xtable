
"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableContext = _interopRequireWildcard(require("./TableContext"));

var _ColumnManager = _interopRequireDefault(require("./ColumnManager"));

var _ColGroup = _interopRequireDefault(require("./ColGroup"));

var _Thead = _interopRequireDefault(require("./Thead"));

var _Tbody = _interopRequireDefault(require("./Tbody"));

var Table =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Table, _React$Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      columns: [],
      columnStore: null
    });
    return _this;
  }

  (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      var _cx;

      var props = this.props;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          tableLayout = _this$props.tableLayout;
      var columnStore = this.state.columnStore;
      var classes = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, prefixCls, true), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), _cx));
      return _react.default.createElement(_TableContext.default.Provider, {
        value: props
      }, _react.default.createElement("table", {
        className: classes,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0
      }, _react.default.createElement(_ColGroup.default, {
        columnStore: columnStore
      }), _react.default.createElement(_Thead.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      })), _react.default.createElement(_Tbody.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.columns !== prevState.columns) {
        return {
          columns: nextProps.columns,
          columnStore: new _ColumnManager.default(nextProps.columns)
        };
      }
    }
  }]);
  return Table;
}(_react.default.Component);

exports.default = Table;
(0, _defineProperty2.default)(Table, "propTypes", {
  prefixCls: _propTypes.default.string,
  columns: _propTypes.default.array,
  data: _propTypes.default.array,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto']),
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  rowClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func])
});
(0, _defineProperty2.default)(Table, "defaultProps", {
  prefixCls: 'rw-table',
  tableLayout: 'auto',
  columns: [],
  data: [],
  rowClassName: '',
  rowKey: 'id'
});