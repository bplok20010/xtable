import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import TheadCell from './TheadCell';

export default class TheadRow extends React.Component {
    static propTypes = {
        row: PropTypes.array,
    }

    static defaultProps = {
        row: [],
    }

    static contextType = TableContext;

    render() {
        const { row } = this.props;
        const { columnStore, prefixCls } = this.context;

        return (
            <tr>
                {row.map((column, i) => {
                    // const column = columnStore.getNode(cell.id);
                    const className = cx({
                        [className]: className,
                        [`${prefixCls}-column-leaf`]: column.leaf,
                    });

                    const title = typeof column.renderHeader === 'function' ? column.renderHeader(column) : column.title;

                    return (
                        <TheadCell
                            {...column}
                            className={className}
                            rowSpan={column.rowSpan}
                            colSpan={column.colSpan}
                            key={column.id || column.dataIndex || i}
                        >
                            {title}
                        </TheadCell>
                    );
                })}
            </tr>
        );
    }

}