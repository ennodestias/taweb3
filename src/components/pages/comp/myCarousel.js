import { Carousel } from 'antd';
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
                    <Typist className="new" onTypingDone={this.next}>Welcome To My Blog!</Typist>
                </div>
                              
            </Carousel>
            </div>
            

            );
        }
    }

export default myCarousel;