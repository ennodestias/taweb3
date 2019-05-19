import { Carousel, Icon, Card, Col, Row } from 'antd';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import './MyCarousel.css';
import Typist from 'react-typist';


class myCarousel extends React.Component {
    next(){

    }
    render(){
        return(
            <div>
            <Carousel autoplay>
                <div>
                {/* <Typist className="new" onTypingDone={this.next}>HELLO!</Typist> */}
                    <Row>
                        <Col span={16}>
                            <img className="gambar" src="https://www.hostgator.com/static/img/index/hero_screens_mob.png"/>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false} style={{paddingRight:230, paddingTop:100}}> 
                                <p className="cheer">HELLO<p className="even">"Even miracles take a little time"</p></p>
                            </Card>    
                        </Col>
                    </Row>
                </div>
                              
            </Carousel>
            </div>
            

            );
        }
    }

export default myCarousel;