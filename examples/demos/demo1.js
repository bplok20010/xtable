import React, { Component } from 'react';
import Table from '../../src';

export default class DEMO extends Component {

    render() {
        const columns = [
            { title: 'A', dataIndex: 'A' },
            { title: 'B', dataIndex: 'B' },
            { title: 'C', dataIndex: 'C' },
            { title: 'D', dataIndex: 'D' },
            { title: 'E', dataIndex: 'E' },
            { title: 'F', dataIndex: 'F' }
        ];

        const data = [
            {
                A: '1',
                B: '1',
                C: '1',
                D: '1',
                E: '1',
                F: '1',
            }
        ];

        return (
            <Table columns={columns} data={data} />
        );
    }

}
