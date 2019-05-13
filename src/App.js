import React from 'react';
import {Link} from "react-router-dom";
import Main from "./components/pages/Main";
import logo from './logo.svg';
import './App.css';
import {Row, Col, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import AnotherAppBar from "./components/AnotherAppBar.js";

function App() {
  return (
    <div>
      <AnotherAppBar/>
          <Main/>
    </div>


  );
}

export default App;
