import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default class TheadCell extends React.Component {
    static propTypes = {
        //dataIndex: PropTypes.oneOfType([PropTypes.string, this.propTypes.number]),
        title: PropTypes.node,
        className: PropTypes.string,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        fixed: PropTypes.oneOf([true, false, 'left', 'right']),
        render: PropTypes.func,
        //renderHeader: PropTypes.func,
        align: PropTypes.string,
        rowSpan: PropTypes.number,
        colSpan: PropTypes.number,
    }

    static contextType = TableContext;

    render() {
        const {
            children,
            className,
            rowSpan,
            colSpan,
            ...column
        } = this.props;

        const { getHeaderCellProps, prefixCls } = this.context;

        const classes = cx({
            [className]: className,
            [`${prefixCls}-align-${column.align}`]: !!column.align,
        });

        const customProps = {
            rowSpan,
            colSpan,
            ...getHeaderCellProps(column)
        };

        customProps.className = cx(classes, customProps.className);

        if (!customProps.rowSpan || !customProps.colSpan) {
            return null;
        }

        return (
            <th
                {...customProps}
            >
                {children}
            </th>
        );
    }

}