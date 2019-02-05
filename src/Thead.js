import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class Thead extends React.Component {
    static propTypes = {
        columns: PropTypes.array,
    }

    static defaultProps = {
        columns: [],
    }

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
        const { columns, prefixCls } = this.props;

        const classes = cx({
            [`${prefixCls}-thead`]: true
        });

        return (
            <thead className={classes}>
                <tr>
                    {
                        columns.map(this.renderColumn.bind(this))
                    }
                </tr>
            </thead>
        );
    }

}