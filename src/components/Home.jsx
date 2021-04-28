import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import HEADER_PART from './Header';
import MENU from '../components/Menu/menu';
import CONTENT from './content';
 import FOOTER from './footer';


const Home = () => {
    return (
        <Layout>
        <HEADER_PART />
        
        <Layout>
          <MENU />

          <Layout>
            <CONTENT />
            <FOOTER />
          </Layout>
          
        </Layout>
      </Layout> 
    )
  };
  export default Home;


