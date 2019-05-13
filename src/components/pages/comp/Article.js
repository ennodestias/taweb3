import { Card } from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const { Meta } = Card;

class Article extends React.Component {
  render(){
      return(
              <Card
                hoverable
                style={{ width: this.props.width }}
                cover={<img src={this.props.gambar} height="this.props.height" />}
              >
                <Meta
                  title={this.props.title}
                  description={this.props.desc}
                />
              </Card>
             
              
        );
      }
    }

    export default Article;