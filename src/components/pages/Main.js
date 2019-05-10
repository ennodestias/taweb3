import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Profile from "./Profile";
import Portofolio from "./Portofolio";

class Main extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portofolio" component={Portofolio}/>

            </Switch>
        );
        }
}

export default Main;