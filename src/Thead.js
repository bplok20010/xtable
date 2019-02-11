import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default class Thead extends React.Component {
    static propTypes = {
        columns: PropTypes.array,
    }

    static defaultProps = {
        columns: [],
    }

    static contextType = TableContext;

    renderCell(column, i) {
        const { prefixCls, components } = this.context;
        const TheadCellComponent = components.thead.cell;
        const {
            title,
            className,
            customHeaderCellProps,
            rowSpan,
            colSpan
        } = column;

        const classes = cx({
            [className]: className,
            [`${prefixCls}-column-leaf`]: column.leaf,
            [`${prefixCls}-align-${column.align}`]: !!column.align,
            [`${customHeaderCellProps.className}`]: customHeaderCellProps.className,
        });

        if (customHeaderCellProps.rowSpan === 0 || customHeaderCellProps.colSpan === 0) {
            return null;
        }

        const cellProps = {
            rowSpan,
            colSpan,
            ...customHeaderCellProps,
            className: classes,
        }

        return (
            <TheadCellComponent
                cellProps={cellProps}
                column={column}
                key={column.id || column.dataIndex || i}
            >
                <div>{title}</div>
            </TheadCellComponent>
        );
    }

    renderRow(row, index) {
        const { prefixCls, components, getHeaderRowProps } = this.context;
        const TheadRowComponent = components.thead.row;
        let rowProps = {};

        if (getHeaderRowProps) {
            rowProps = {
                ...getHeaderRowProps(row, index),
            };
        }

        rowProps.className = cx(`${prefixCls}-thead-row`, rowProps.className);

        return (
            <TheadRowComponent
                rowProps={rowProps}
                key={index}
                row={row}
            >
                {row.map(this.renderCell.bind(this))}
            </TheadRowComponent>
        );
    }

    render() {
        const { prefixCls, columnStore, components } = this.context;

        const TheadComponent = components.thead.wrapper;

        const rows = columnStore.groupHeaderData;
        const classes = cx({
            [`${prefixCls}-thead`]: true
        });

        return (
            <TheadComponent className={classes}>
                {rows.map(this.renderRow.bind(this))}
            </TheadComponent>
        );
    }

}