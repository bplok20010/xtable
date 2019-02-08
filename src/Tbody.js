import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TableContext from './TableContext';
import TbodyRow from './TbodyRow';

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

    renderCell(data, column, i) {

        return (
            <td key={i}>
                <div>
                    {data[column.dataIndex]}
                </div>
            </td>
        );
    }

    renderRow(data, i) {
        const { columnStore } = this.props;
        const columns = columnStore.leafColumns;

        return (
            <tr key={i}>
                {
                    columns.map(this.renderCell.bind(this, data))
                }
            </tr>
        );
    }

    render() {
        const { data, prefixCls } = this.props;
        const { rowKey, rowClassName, columnStore } = this.context;
        const classes = cx({
            [`${prefixCls}-tbody`]: true
        });




        const tableRows = data.map((record, index) => {
            let key = record[rowKey] == null ? index : record[rowKey];
            if (typeof rowKey === 'function') {
                key = rowKey(record);
            }

            let className = typeof rowClassName === 'function' ?
                rowClassName(record, index) :
                rowClassName;

            return (
                <TbodyRow
                    key={key}
                    className={className}
                    index={index}
                    record={record}
                />
            )
        });

        return (
            <tbody className={classes}>
                {tableRows}
            </tbody>
        );
    }

}