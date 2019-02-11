import React, { Component } from 'react';
import Table from '../../src';

export default class DEMO extends Component {

    getRowProps(data, index) {
        if (index % 2) {
            return {
                className: 'odd'
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
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        align: 'right',
                        getHeaderCellProps() {
                            return {
                                colSpan: 0,
                            };
                        },
                    },
                    {
                        title: '性别',
                        dataIndex: 'gender',
                        align: 'center',
                        getHeaderCellProps() {
                            return {
                                colSpan: 2,
                            };
                        },
                    },
                    {
                        title: '电话号码',
                        dataIndex: 'phone',
                        align: 'right',
                        render(text) {
                            return 'Tel:' + text;
                        },
                        renderHeader(text) {
                            return 'Tel:' + text;
                        },
                        getCellProps(data) {
                            return {
                                onClick() {
                                    alert(data['phone'])
                                }
                            }
                        },
                        getHeaderCellProps(column) {
                            return {
                                onClick() {
                                    alert(column['dataIndex'])
                                }
                            }
                        }
                    },
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
                getRowProps={this.getRowProps}
                getHeaderRowProps={this.getRowProps}
            />
        );
    }

}
