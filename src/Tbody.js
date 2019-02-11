import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import TableContext from './TableContext';

export default class Tbody extends React.Component {

    static propTypes = {
        columns: PropTypes.array,
        data: PropTypes.array,
    }

    static defaultProps = {
        columns: [],
        data: [],
    }

    static contextType = TableContext;

    renderCell(record, column, index) {
        const { prefixCls, components } = this.context;
        const { dataIndex, render } = column;
        const TbodyCell = components.tbody.cell;
        const className = cx({
            [column.className]: column.className,
            [`${prefixCls}-align-${column.align}`]: !!column.align,
        });
        let tdProps = {};
        let colSpan;
        let rowSpan;

        let text;
        if (typeof dataIndex === 'number') {
            text = get(record, dataIndex);
        } else if (!dataIndex || dataIndex.length === 0) {
            text = record;
        } else {
            text = get(record, dataIndex);
        }

        if (render) {
            text = render(text, record, index, column);
        }

        if (column.getCellProps) {
            tdProps = { ...column.getCellProps(record, index) };
            colSpan = tdProps.colSpan;
            rowSpan = tdProps.rowSpan;
        }

        tdProps.className = cx(className, tdProps.className);

        if (rowSpan === 0 || colSpan === 0) {
            return null;
        }

        return (
            <TbodyCell
                column={column}
                record={record}
                index={index}
                key={column.id || column.dataIndex || index}
                cellProps={tdProps}
            >
                {text}
            </TbodyCell>
        );
    }

    renderRow(record, index, rowKey) {
        const { columnStore, prefixCls, getRowProps, rowClassName, components } = this.context;
        const TbodyRow = components.tbody.row;
        const columns = columnStore.leafColumns;
        let customRowProps = {};

        if (getRowProps) {
            customRowProps = {
                ...getRowProps(record, index),
            };
        }

        customRowProps.className = cx(
            `${prefixCls}-row`,
            customRowProps.className,
            typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName
        );

        return (
            <TbodyRow
                rowProps={{
                    ...customRowProps,
                    'data-row-index': index,
                    'data-row-key': rowKey,
                }}
                key={rowKey}
                rowKey={rowKey}
                index={index}
                record={record}
            >
                {columns.map(this.renderCell.bind(this, record))}
            </TbodyRow>
        );
    }

    render() {
        const { data, prefixCls } = this.props;
        const { rowKey, components } = this.context;
        const TbodyWrapper = components.tbody.wrapper;
        const classes = cx({
            [`${prefixCls}-tbody`]: true
        });

        const tableRows = data.map((record, index) => {
            let rkey = rowKey == null ? index : record[rowKey];
            if (typeof rowKey === 'function') {
                rkey = rowKey(record);
            }

            return this.renderRow(record, index, rkey);
        });

        return (
            <TbodyWrapper className={classes} >
                {tableRows}
            </TbodyWrapper>
        );
    }


}