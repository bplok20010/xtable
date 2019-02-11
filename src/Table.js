import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import merge from 'lodash/merge';
import TableContext from './TableContext';
import ColumnManager from './ColumnManager';
import ColGroup from './ColGroup';
import Thead from './Thead';
import Tbody from './Tbody';
import TheadRow from './components/TheadRow';
import TheadCell from './components/TheadCell';
import TbodyRow from './components/TbodyRow';
import TbodyCell from './components/TbodyCell';

const defaultComponents = {
    table: 'table',
    thead: {
        wrapper: 'thead',
        row: TheadRow,
        cell: TheadCell,
    },
    tbody: {
        wrapper: 'tbody',
        row: TbodyRow,
        cell: TbodyCell,
    },
};

export {
    TableContext,
    ColumnManager,
    ColGroup,
    Thead,
    Tbody,
    TheadRow,
    TheadCell,
    TbodyRow,
    TbodyCell,
}

export default class Table extends React.Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        components: PropTypes.object,
        columns: PropTypes.array,
        columnStore: PropTypes.object,
        data: PropTypes.array,
        tableLayout: PropTypes.oneOf(['fixed', 'auto']),
        rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        showHeader: PropTypes.bool,
        showBody: PropTypes.bool,
        getCellProps: PropTypes.func,
        getHeaderRowProps: PropTypes.func,
        getRowProps: PropTypes.func,
    }

    static defaultProps = {
        prefixCls: 'rw-table',
        tableLayout: 'auto',
        className: '',
        style: {},
        components: defaultComponents,
        /**
         * @param {array<Column>}
         */
        columns: [],
        data: [],
        rowClassName: '',
        showHeader: true,
        showBody: true,
        getHeaderRowProps: () => ({}),
        getRowProps: () => ({}),
    }

    state = {
        columns: [],
        columnStore: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.columnStore) {
            return {
                columnStore: nextProps.columnStore
            }
        }

        if (nextProps.columns !== prevState.columns) {
            return {
                columns: nextProps.columns,
                columnStore: new ColumnManager(nextProps.columns)
            };
        }
    }

    render() {
        const props = this.props;
        const { components, prefixCls, tableLayout,
            className, style, showHeader, showBody } = this.props;
        const { columnStore } = this.state;
        const classes = cx({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-layout-fixed`]: tableLayout === 'fixed'
        });

        const newComponents = merge({}, components, defaultComponents);

        const TableComponent = newComponents.table;

        return (
            <TableContext.Provider value={{
                ...props,
                columnStore: columnStore,
                components: newComponents
            }}>
                <TableComponent
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
                    {
                        showBody ?
                            <Tbody {...props} columnStore={columnStore} /> :
                            null
                    }

                </TableComponent>
            </TableContext.Provider>
        );
    }

}