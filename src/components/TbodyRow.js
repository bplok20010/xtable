import React from 'react';
import PropTypes from 'prop-types';
import TableContext from '../TableContext';

export default class TableRow extends React.Component {

    static propTypes = {
        rowKey: PropTypes.any,
        record: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        rowProps: PropTypes.object.isRequired,
    }

    static defaultProps = {
        rowProps: {},
        record: {},
        index: 0,
    }

    static contextType = TableContext;

    render() {
        const { children, rowProps } = this.props;

        return (
            <tr
                {...rowProps}
            >
                {children}
            </tr>
        );
    }

}