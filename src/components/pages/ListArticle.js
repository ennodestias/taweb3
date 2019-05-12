import { List, Card } from 'antd';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
];
class ListArticle extends React.Component {
    render(){
        return(
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
                )}
            />
            );

    }
}
export default ListArticle;