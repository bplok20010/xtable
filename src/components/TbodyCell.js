import React from 'react';
import PropTypes from 'prop-types';
import TableContext from '../TableContext';

export default class TbodyCell extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        column: PropTypes.object.isRequired,
        record: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        cellProps: PropTypes.object,
    }

    static defaultProps = {
        column: {},
        record: {},
        index: 0,
        cellProps: {},
    }

    static contextType = TableContext;

    render() {
        const { cellProps, children } = this.props;
        return (
            <td  {...cellProps}>
                {children}
            </td>
        );
    }

}