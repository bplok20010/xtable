import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class TCell extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        column: PropTypes.object.isRequired,
        record: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
    }

    static defaultProps = {
        columns: {},
        record: {},
        index: 0,
    }

    render() {
        const { prefixCls, column, record, index } = this.props;
        const render = column.render;

        const className = cx({
            [className]: className,
            [`${prefixCls}-align-${column.align}`]: !!column.align,
        });

        return (
            <td className={className}>
                <div>
                    {
                        typeof render === 'function' ? render(record, column, index) : record[column.dataIndex]
                    }
                </div>
            </td>
        );
    }

}