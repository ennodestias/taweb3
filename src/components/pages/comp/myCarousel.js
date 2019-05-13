import { Carousel } from 'antd';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import './MyCarousel.css';


class myCarousel extends React.Component {
    render(){
        return(
            <Carousel autoplay>
                <div><img width="100%" height="610px" src="https://wallpaperplay.com/walls/full/8/8/a/78866.jpg" /></div>
                <div><img width="100%" height="610px" src="https://images.unsplash.com/photo-1532376413372-100a02226622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" /></div>
                <div><img width="100%" height="610px" src="https://rumbi.com/wp-content/uploads/2017/05/island-beach-wallpaper-1.jpg" /></div>
            </Carousel>
            );
        }
    }

export default myCarousel;