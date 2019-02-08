import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import TheadRow from './TheadRow';

export default class Thead extends React.Component {
    static propTypes = {
        columns: PropTypes.array,
    }

    static defaultProps = {
        columns: [],
    }

    static contextType = TableContext;

    renderColumn(column, i) {
        const { prefixCls } = this.props;
        const classes = cx({
            [`${prefixCls}-cell`]: true
        });

        return (
            <th key={i}>
                <div className={classes}>
                    {column.title}
                </div>
            </th>
        );
    }

    render() {
        const { prefixCls } = this.props;
        const { columnStore } = this.context;

        const rows = columnStore.groupHeaderData;
        const classes = cx({
            [`${prefixCls}-thead`]: true
        });

        return (
            <thead className={classes}>
                {rows.map((row, index) => {
                    return (
                        <TheadRow
                            key={index}
                            row={row}
                        />
                    )
                }
                )}
            </thead>
        );
    }

}