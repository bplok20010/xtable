
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableContext", {
  enumerable: true,
  get: function get() {
    return _TableContext.default;
  }
});
Object.defineProperty(exports, "ColumnManager", {
  enumerable: true,
  get: function get() {
    return _ColumnManager.default;
  }
});
Object.defineProperty(exports, "ColGroup", {
  enumerable: true,
  get: function get() {
    return _ColGroup.default;
  }
});
Object.defineProperty(exports, "Thead", {
  enumerable: true,
  get: function get() {
    return _Thead.default;
  }
});
Object.defineProperty(exports, "Tbody", {
  enumerable: true,
  get: function get() {
    return _Tbody.default;
  }
});
Object.defineProperty(exports, "TheadRow", {
  enumerable: true,
  get: function get() {
    return _TheadRow.default;
  }
});
Object.defineProperty(exports, "TheadCell", {
  enumerable: true,
  get: function get() {
    return _TheadCell.default;
  }
});
Object.defineProperty(exports, "TbodyRow", {
  enumerable: true,
  get: function get() {
    return _TbodyRow.default;
  }
});
Object.defineProperty(exports, "TbodyCell", {
  enumerable: true,
  get: function get() {
    return _TbodyCell.default;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

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

var _merge = _interopRequireDefault(require("lodash/merge"));

var _TableContext = _interopRequireDefault(require("./TableContext"));

var _ColumnManager = _interopRequireDefault(require("./ColumnManager"));

var _ColGroup = _interopRequireDefault(require("./ColGroup"));

var _Thead = _interopRequireDefault(require("./Thead"));

var _Tbody = _interopRequireDefault(require("./Tbody"));

var _TheadRow = _interopRequireDefault(require("./components/TheadRow"));

var _TheadCell = _interopRequireDefault(require("./components/TheadCell"));

var _TbodyRow = _interopRequireDefault(require("./components/TbodyRow"));

var _TbodyCell = _interopRequireDefault(require("./components/TbodyCell"));

var defaultComponents = {
  table: 'table',
  thead: {
    wrapper: 'thead',
    row: _TheadRow.default,
    cell: _TheadCell.default
  },
  tbody: {
    wrapper: 'tbody',
    row: _TbodyRow.default,
    cell: _TbodyCell.default
  }
};

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
          components = _this$props.components,
          prefixCls = _this$props.prefixCls,
          tableLayout = _this$props.tableLayout,
          className = _this$props.className,
          style = _this$props.style,
          showHeader = _this$props.showHeader,
          showBody = _this$props.showBody;
      var columnStore = this.state.columnStore;
      var classes = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, prefixCls, true), (0, _defineProperty2.default)(_cx, className, className), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), _cx));
      var newComponents = (0, _merge.default)({}, components, defaultComponents);
      var TableComponent = newComponents.table;
      return _react.default.createElement(_TableContext.default.Provider, {
        value: (0, _objectSpread2.default)({}, props, {
          columnStore: columnStore,
          components: newComponents
        })
      }, _react.default.createElement(TableComponent, {
        className: classes,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0,
        style: style
      }, _react.default.createElement(_ColGroup.default, {
        columnStore: columnStore
      }), showHeader ? _react.default.createElement(_Thead.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      })) : null, showBody ? _react.default.createElement(_Tbody.default, (0, _extends2.default)({}, props, {
        columnStore: columnStore
      })) : null));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.columnStore) {
        return {
          columnStore: nextProps.columnStore
        };
      }

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
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  components: _propTypes.default.object,
  columns: _propTypes.default.array,
  columnStore: _propTypes.default.object,
  data: _propTypes.default.array,
  tableLayout: _propTypes.default.oneOf(['fixed', 'auto']),
  rowKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  rowClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  showHeader: _propTypes.default.bool,
  showBody: _propTypes.default.bool,
  getHeaderRowProps: _propTypes.default.func,
  getRowProps: _propTypes.default.func
});
(0, _defineProperty2.default)(Table, "defaultProps", {
  prefixCls: 'xtable',
  tableLayout: 'auto',
  className: '',
  style: {},
  components: defaultComponents,

  /**
   * @param {array<Column>}
   */
  columns: [],
  data: [],
  rowClassName: '',
  showHeader: true,
  showBody: true,
  getHeaderRowProps: null,
  getRowProps: null
});