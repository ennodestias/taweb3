import React from 'react';
import {Link} from "react-router-dom";
import Main from "./components/pages/Main";
import logo from './logo.svg';
import './App.css';
import {Row, Col, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import AnotherAppBar from "./components/AnotherAppBar.js";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <AnotherAppBar/>
        <Main/>
          <Layout>
            <Footer className="footer">
              <Row gutter={8}>
                <center>
                  <Col span={8} offset={8}>
                    <Icon type="facebook" style={{fontSize: '25px'}} />
                    <Icon type="twitter" style={{fontSize: '25px'}} />
                    <Icon type="instagram" style={{fontSize: '25px'}} />
                  </Col>
                  </center>
              </Row>
            </Footer>
          </Layout>
    </div>


  );
}

export default App;
