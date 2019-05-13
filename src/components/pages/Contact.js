import React, {Component} from 'react';
import MyContact from './comp/myContact';
import {Row, Col} from 'antd';

class Contact extends Component {
    render(){
        return (
            <div>
            <Row guter={8}>
                    <Col offset={4} span={16}>
                    <MyContact/> 
                    </Col>
            </Row>
            </div>
        );
        }
}

export default Contact;