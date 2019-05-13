import React, {Component} from 'react';
import MyCard from'./comp/myCard';
import {Row, Col} from 'antd';

class Profile extends Component {
    render(){
        return (
        <div>
        <Row guter={8}>
                <Col offset={4} span={16}>
                <MyCard/> 
                </Col>
        </Row>
        </div>
                
                
        );
        }
}

export default Profile;