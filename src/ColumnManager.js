import TreeStore from 'xtree-store';
import Column from './Column';

export default class ColumnManager {
    store = null;
    _idx = 0;

    groupHeaderData = [];

    constructor(columns) {
        this.store = new TreeStore(columns, {
            idField: 'id',
            childrenField: 'children',
            processNode: (node) => {
                this._idx++;

                return new Column({
                    id: this._idx,
                    ...node
                });
            }
        });

        this.groupHeaderData = this.genGroupHeaderData();
    }

    get leafColumns() {
        return this.store.getAllChildren().filter(node => this.store.isLeaf(node.id))
    }

    getNode(id) {
        return this.store.getNode(id);
    }

    isLeaf(id) {
        return this.store.isLeaf(id);
    }

    genGroupHeaderData() {
        const store = this.store;
        const MaxRows = store.getMaxDepth();
        const rows = [];

        for (let i = 0; i < MaxRows; i++) {
            rows[i] = [];
            const nodes = store.getDepthNodes(i + 1);//.map(node => node.id);

            nodes.forEach(function (node) {
                const id = node.id;
                const leafs = store
                    .getAllChildren(id)
                    .filter(node => node.leaf);
                const isLeaf = node.leaf;
                let rowSpan = 1;
                let colSpan = leafs.length;

                if (isLeaf) {
                    const pNodes = store.getParentNodes(id);
                    rowSpan = MaxRows - pNodes.length;
                    colSpan = 1;
                }

                node.rowSpan = rowSpan;
                node.colSpan = colSpan;

                rows[i].push(node);
            })
        }

        return rows;
    }
}