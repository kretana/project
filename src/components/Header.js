import React from 'react';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;


const HEADER_PART = () => {
    return (
        <Header style={{ padding: '10', background: '#F2EFFB' }} >
            <Avatar style={{ float: 'right', padding: 10 }} size={30} src='' />
            <Title style={{ color: "black" }} level={3}> ANT DESIGN</Title>
        </Header>
    )
};
export default HEADER_PART;
