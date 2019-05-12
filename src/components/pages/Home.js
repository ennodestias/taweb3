import React, {Component} from 'react';
import MyCarousel from './myCarousel';
import MyCalender from './myCalender';
import ListArticle from './ListArticle';

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Welcome To My Blog</h1>
                <MyCarousel/>
                <ListArticle/>
                <MyCalender/>
            </div>   
        );
        }
}

export default Home;