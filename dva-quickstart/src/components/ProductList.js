/**
 * Created by Administrator on 2017/7/24 0024.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products })=>{
  const columns = [{
    title:'Name',
    dataIndex:'name'
  },{
    title:'Actions',
    render:(text,record)=>{
      return (
        <Popconfirm title="Delete?" onConfirm={()=> onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
      return (
        <Table
          dataSource={products}
          columns={columns}
          rowKey={record=>record.id}
        />
      );
};

ProductList.prototypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;

