import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Data from './data/data';
import Columns from './data/columns';
import HEADER_PART from './components/Header';
import MENU from './components/menu';
import CONTENT from './components/content';
import FOOTER from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
      Columns: Columns
    }
  }
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}
export default App;
