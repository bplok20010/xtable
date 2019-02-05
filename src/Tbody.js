import React from 'react';
import PropTypes from 'prop-types';

export default class Tbody extends React.Component {

    static propTypes = {
        columns: PropTypes.array,
        data: PropTypes.array,
    }

    static defaultProps = {
        columns: [],
        data: [],
    }

    renderCell(data, column, i) {

        return (
            <td key={i}>
                {data[column.dataIndex]}
            </td>
        );
    }

    renderRow(data, i) {
        const { columns } = this.props;


        return (
            <tr key={i}>
                {
                    columns.map(this.renderCell.bind(this, data))
                }
            </tr>
        );
    }

    render() {
        const { data } = this.props;

        return (
            <tbody>
                {
                    data.map(this.renderRow.bind(this))
                }
            </tbody>
        );
    }

}