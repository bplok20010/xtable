import React, { Component } from 'react';
import Table from '../../src';

export default class DEMO extends Component {

    getHeaderCellProps(column) {
        if (column.dataIndex === 'age') {
            return {
                colSpan: 0
            }
        }
        if (column.dataIndex === 'gender') {
            return {
                colSpan: 2
            }
        }

    }

    render() {
        const columns = [
            { title: '日期', dataIndex: 'date', width: 100, align: 'center' },
            { title: '姓名', dataIndex: 'name', align: 'left' },
            {
                title: '基础信息',
                children: [
                    { title: '年龄', dataIndex: 'age', align: 'right' },
                    { title: '性别', dataIndex: 'gender', align: 'center' },
                    { title: '电话号码', dataIndex: 'phone', align: 'right' },
                    { title: '地址', dataIndex: 'address' },
                ]
            },
            { title: '描述', dataIndex: 'desc' },
        ];

        const data = [];

        for (let i = 0; i < 50; i++) {
            data.push({
                date: '2019-02-08',
                name: '商汤',
                age: 22,
                gender: '男',
                phone: 13128989826,
                address: 'New York No. 1 Lake Park',
                desc: '荷兰优质淡奶，奶香浓而不腻'
            });
        }

        return (
            <Table
                columns={columns}
                data={data}
                style={{ width: '100%' }}
                showHeader={true}
                getHeaderCellProps={this.getHeaderCellProps}
            />
        );
    }

}
