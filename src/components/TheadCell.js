import React from 'react';
import PropTypes from 'prop-types';
import TableContext from '../TableContext';

export default class TheadCell extends React.Component {
    static propTypes = {
        column: PropTypes.object.isRequired,
        cellProps: PropTypes.object.isRequired,
    }

    static defaultProps = {
        cellProps: {}
    }

    static contextType = TableContext;

    render() {
        const {
            cellProps,
            children
        } = this.props;

        return (
            <th
                {...cellProps}
            >
                {children}
            </th>
        );
    }

}