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
              <Row>
                <center>
                  <Col span={24}>
                    <Icon type="facebook" style={{fontSize: '25px'}} /> &nbsp;&nbsp;
                    <Icon type="twitter" style={{fontSize: '25px'}} />&nbsp;&nbsp;
                    <Icon type="instagram" style={{fontSize: '25px'}} />
                  </Col>
                  </center>
              </Row>
              <br/>
              <center>
              <p>Made by Pure Heart&nbsp;<Icon type="copyright" /> 2019</p>
              </center>
              
            </Footer>
          </Layout>
    </div>


  );
}

export default App;
