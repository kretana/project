import React from 'react';
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Table } from 'antd';
import Data from '../data/data';
import Columns from '../data/columns';
const { Content } = Layout;



const CONTENT = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>abcdefghjls</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: 'white', padding: 50, minHeight: 500, }}>
        <Table dataSource={Data} columns={Columns}>
        </Table>
      </div>
    </Content>
  )
};
export default CONTENT;
