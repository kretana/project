import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
const { Sider } = Layout;

const MENU = () => {
    return (
        <Sider style={{ background: '#FFFEF7' }}>

            <Menu defaultSelectedKeys='Home'>
                <Menu.Item key='Home'>Home</Menu.Item>
                <Menu.Item key='Dashboard' >Dashboard</Menu.Item>
            </Menu>
        </Sider>
    )
};
export default MENU;