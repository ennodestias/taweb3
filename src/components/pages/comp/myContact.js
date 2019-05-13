import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { Icon } from 'antd';

const { Meta } = Card;

class myContact extends React.Component {
    render(){
        return(
          <Card  title="Contact Me"> 
          <div style={{ background: '#00000', padding: '20px' }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false}>
                  <p><Icon type="google" style={{fontSize: '25px'}} />&emsp; ennodestias@gmail.com</p>
                  <p><Icon type="phone" style={{fontSize: '25px'}} />&emsp; 089808279264</p>
                  <p><Icon type="facebook" style={{fontSize: '25px'}} />&emsp; Enno Destias</p>
                  <p><Icon type="twitter" style={{fontSize: '25px'}} />&emsp; ennodstsr</p>
                  <p><Icon type="instagram" style={{fontSize: '25px'}} />&emsp; ennodstsr</p>
                  
                </Card>
              </Col>
            </Row>
          </div>
          </Card>
        );
    }
}


export default myContact;