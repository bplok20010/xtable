import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Thead from './Thead';
import Tbody from './Tbody';

export default class Table extends React.Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        columns: PropTypes.array,
        data: PropTypes.array,
        tableLayout: PropTypes.oneOf(['fixed', 'auto']),
    }

    static defaultProps = {
        prefixCls: 'rw-table',
        tableLayout: 'auto',
        columns: [],
        data: [],
    }

    render() {
        const props = this.props;
        const { prefixCls, tableLayout } = this.props;
        const classes = cx({
            [prefixCls]: true,
            [`${prefixCls}-layout-fixed`]: tableLayout === 'fixed'
        })

        return (
            <table
                className={classes}
                cellPadding={0}
                cellSpacing={0}
                border={0}
            >
                <Thead {...props} />
                <Tbody {...props} />
            </table>
        );
    }

}