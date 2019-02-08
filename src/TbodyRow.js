import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import TbodyCell from './TbodyCell';

export default class TableRow extends React.Component {

    static propTypes = {
        //  column: PropTypes.object.isRequired,
        record: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
    }

    static defaultProps = {
        //  columns: {},
        record: {},
        index: 0,
    }

    static contextType = TableContext;

    render() {
        const { record, index, className } = this.props;
        const { columnStore, prefixCls } = this.context;
        const columns = columnStore.leafColumns;


        return (
            <tr className={className}>
                {
                    columns.map((column, i) => (
                        <TbodyCell
                            prefixCls={prefixCls}
                            column={column}
                            record={record}
                            index={index}
                            key={column.id || column.dataIndex || i}
                        />
                    ))
                }
            </tr>
        );
    }

}