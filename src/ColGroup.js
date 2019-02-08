import React from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default class Colgroup extends React.Component {

    static contextType = TableContext;


    renderCol(column, i) {
        const style = {};
        const customHeaderCellProps = column.customHeaderCellProps;

        if (column.width != null) {
            style.width = column.width;
        }

        if (column.minWidth != null) {
            style.minWidth = column.minWidth;
        }

        if (column.maxWidth != null) {
            style.maxWidth = column.maxWidth;
        }

        // if () {

        // }

        return (
            <col key={column.key} style={style} />
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