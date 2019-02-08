
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _xtreeStore = _interopRequireDefault(require("xtree-store"));

var ColumnManager =
/*#__PURE__*/
function () {
  function ColumnManager(columns) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ColumnManager);
    (0, _defineProperty2.default)(this, "store", null);
    (0, _defineProperty2.default)(this, "_idx", 0);
    this.store = new _xtreeStore.default(columns, {
      idField: 'id',
      childrenField: 'children',
      processNode: function processNode(node) {
        _this._idx++;
        return (0, _objectSpread2.default)({
          id: _this._idx
        }, node);
      }
    });
  }

  (0, _createClass2.default)(ColumnManager, [{
    key: "getNode",
    value: function getNode(id) {
      return this.store.getNode(id);
    }
  }, {
    key: "isLeaf",
    value: function isLeaf(id) {
      return this.store.isLeaf(id);
    }
  }, {
    key: "genGroupHeaderData",
    value: function genGroupHeaderData() {
      var store = this.store;
      var MaxRows = store.getMaxDepth();
      var rows = [];

      var _loop = function _loop(i) {
        rows[i] = [];
        var ids = store.getDepthNodes(i + 1).map(function (node) {
          return node.id;
        });
        ids.forEach(function (id) {
          var leafs = store.getAllChildren(id).filter(function (node) {
            return store.isLeaf(node.id);
          }).map(function (node) {
            return node.id;
          });
          var isLeaf = store.isLeaf(id);
          var rowSpan = 1;
          var colSpan = leafs.length;

          if (isLeaf) {
            var pids = store.getParentIds(id);
            rowSpan = MaxRows - pids.length;
            colSpan = 1;
          }

          rows[i].push({
            rowSpan: rowSpan,
            colSpan: colSpan,
            id: id
          });
        });
      };

      for (var i = 0; i < MaxRows; i++) {
        _loop(i);
      }

      return rows;
    }
  }, {
    key: "leafColumns",
    get: function get() {
      var _this2 = this;

      return this.store.getAllChildren().filter(function (node) {
        return _this2.store.isLeaf(node.id);
      });
    }
  }]);
  return ColumnManager;
}();

exports.default = ColumnManager;