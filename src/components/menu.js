import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Menu } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;


const MENU = () => {
  return (
    <Sider style={{ background: '#FFFEF7' }}>
      <Menu defaultSelectedKeys={['Home']} mode="inline">
        <Menu.Item key='Home'>
          Home
            </Menu.Item>

        <SubMenu title='About Us'>
          <Menu.ItemGroup key='AboutUs'>
            <Menu.Item key='location1'>Reasons to choose us</Menu.Item>
            <Menu.Item key='location2'>Details</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu title='About Us'>
          <Menu.ItemGroup key='AboutUs'>
            <Menu.Item key='location1'>Reasons to choose us</Menu.Item>
            <Menu.Item key='location2'>Details</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu title='About Us'>
          <Menu.ItemGroup key='AboutUs'>
            <Menu.Item key='location1'>Reasons to choose us</Menu.Item>
            <Menu.Item key='location2'>Details</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu icon={<MailOutlined />} title='Contact'>
          <Menu.ItemGroup key='Contact us'>
            <Menu.Item key='location1'>Location-1</Menu.Item>
            <Menu.Item key='location2'>Location-2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

      </Menu>
    </Sider>

  )
};
export default MENU;