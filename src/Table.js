import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TableContext from './TableContext';
import ColumnManager from './ColumnManager';
import ColGroup from './ColGroup';
import Thead from './Thead';
import Tbody from './Tbody';

export default class Table extends React.Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        columns: PropTypes.array,
        data: PropTypes.array,
        tableLayout: PropTypes.oneOf(['fixed', 'auto']),
        rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        showHeader: PropTypes.bool,
        getHeaderCellProps: PropTypes.func,
        getCellProps: PropTypes.func,
        getHeaderRowProps: PropTypes.func,
        getRowProps: PropTypes.func,
    }

    static defaultProps = {
        prefixCls: 'rw-table',
        tableLayout: 'auto',
        className: '',
        style: {},
        /**
         * @type {array<Object>}
         * @property {string} id
         * @property {string} dataIndex
         * @property {string} title
         * @property {string|number} width
         * @property {string|number} minWidth
         * @property {string|number} maxWidth
         * @property {function} render
         * @property {function} renderHeader
         * @property {string|boolean} fixed 
         * @property {string} align 
         * @property {string} className 
         */
        columns: [],
        data: [],
        rowClassName: '',
        rowKey: 'id',
        showHeader: true,
        getHeaderCellProps: () => ({}),
        getCellProps: () => ({}),
        getHeaderRowProps: () => ({}),
        getRowProps: () => ({}),
    }

    state = {
        columns: [],
        columnStore: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.columns !== prevState.columns) {
            return {
                columns: nextProps.columns,
                columnStore: new ColumnManager(nextProps.columns)
            };
        }
    }

    render() {
        const props = this.props;
        const { prefixCls, tableLayout, className, style, showHeader } = this.props;
        const { columnStore } = this.state;
        const classes = cx({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-layout-fixed`]: tableLayout === 'fixed'
        });

        return (
            <TableContext.Provider value={{
                ...props,
                columnStore: columnStore
            }}>
                <table
                    className={classes}
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    style={style}
                >
                    <ColGroup columnStore={columnStore} />
                    {
                        showHeader ?
                            <Thead {...props} columnStore={columnStore} /> :
                            null
                    }
                    <Tbody {...props} columnStore={columnStore} />
                </table>
            </TableContext.Provider>
        );
    }

}