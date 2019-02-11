import React from 'react';
import PropTypes from 'prop-types';
import TableContext from '../TableContext';

export default class TheadRow extends React.Component {
    static propTypes = {
        rowProps: PropTypes.object,
        row: PropTypes.array,
    }

    static defaultProps = {
        rowProps: {},
        row: [],
    }

    static contextType = TableContext;

    render() {
        const { children, rowProps } = this.props;

        return (
            <tr {...rowProps}>
                {children}
            </tr>
        );
    }

}