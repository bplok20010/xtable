import React from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default class ColGroup extends React.Component {
    static contextType = TableContext;

    renderCol(column, i) {
        const style = {};

        if (column.width != null) {
            style.width = column.width;
        }

        if (column.minWidth != null) {
            style.minWidth = column.minWidth;
        }

        if (column.maxWidth != null) {
            style.maxWidth = column.maxWidth;
        }

        return (
            <col key={column.id || column.dataIndex || i} style={style} />
        );
    }

    render() {
        const { columnStore } = this.context;

        const columns = columnStore.leafColumns;

        return (
            <colgroup>
                {
                    columns.map(this.renderCol.bind(this))
                }
            </colgroup>
        );
    }

}