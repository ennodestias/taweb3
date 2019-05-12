import { Calendar } from 'antd';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
class myCalender extends React.Component {
          render(){
              return(
          <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        );
      }
    }

    export default myCalender;