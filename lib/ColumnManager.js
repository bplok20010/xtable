
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

var _Column = _interopRequireDefault(require("./Column"));

var ColumnManager =
/*#__PURE__*/
function () {
  function ColumnManager(columns) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ColumnManager);
    (0, _defineProperty2.default)(this, "store", null);
    (0, _defineProperty2.default)(this, "_idx", 0);
    (0, _defineProperty2.default)(this, "groupHeaderData", []);
    this.store = new _xtreeStore.default(columns, {
      idField: 'id',
      childrenField: 'children',
      processNode: function processNode(node) {
        _this._idx++;
        return new _Column.default((0, _objectSpread2.default)({
          id: _this._idx
        }, node));
      }
    });
    this.groupHeaderData = this.genGroupHeaderData();
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
        var nodes = store.getDepthNodes(i + 1); //.map(node => node.id);

        nodes.forEach(function (node) {
          var id = node.id;
          var leafs = store.getAllChildren(id).filter(function (node) {
            return node.leaf;
          });
          var isLeaf = node.leaf;
          var rowSpan = 1;
          var colSpan = leafs.length;

          if (isLeaf) {
            var pNodes = store.getParentNodes(id);
            rowSpan = MaxRows - pNodes.length;
            colSpan = 1;
          }

          node.rowSpan = rowSpan;
          node.colSpan = colSpan;
          rows[i].push(node);
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