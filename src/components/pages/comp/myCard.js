import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { Icon } from 'antd';
import { Steps } from 'antd';
import { Timeline } from 'antd';

const { Meta } = Card;
const Step = Steps.Step;


class myCard extends React.Component {
    render(){
        return(
          <Card title="My Profile">
          <div style={{ background: '#00000', padding: '20px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src="https://scontent-lht6-1.cdninstagram.com/vp/1b40b86bfa6634df84cf5b76764d677f/5D0D8F1D/t51.2885-15/e35/42830824_2193103600969503_3295358884846072401_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTg4MzQ2MzUyMDM1MjUyNzQ5Nw%3D%3D.2" />}>
                  <Meta align="center"
                  title= 'Hi! Im Enno'
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Profile Info" bordered={false}>
                  <p>Name&emsp;&emsp;&emsp; : Enno Destias Rahmadhani</p>
                  <p>Birthday&emsp;&emsp; : December 15th</p>
                  <p>Gender &emsp;&emsp; : Female</p>
                  <p>Address&emsp;&emsp; : Moh Yamin Street, III C, Bogo <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Nganjuk</p>
                  <p>Nationality&emsp;: Indonesia</p>
                </Card>
              </Col>
            </Row>
          </div>
            <Card title="Education" bordered={false}>
                <Steps current={3}>
                  <Step title="2011-2014" description="Junior High School 1 Nganjuk" />
                  <Step title="2014-2017" description="Senior High School 1 Nganjuk" />
                  <Step title="2017-Now" description="Universitas Gadjah Mada" />
                </Steps>
            </Card>
            <Card title="Experience" bordered={false}>
            <Timeline>
                <Timeline.Item color="green">
                  <p>2017</p>
                  <p>HIMAKOMSI</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <p>2018</p>
                  <p>Co-Facilitator PPSMB Universal</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <p>2018</p>
                  <p>Kesekretariatan TED</p>
                </Timeline.Item>
                <Timeline.Item color="red">
                  <p>2018 & 2019</p>
                  <p>VOCOMFEST</p>
                </Timeline.Item>
            </Timeline>
            </Card>
          </Card>
        );
    }
}


export default myCard;