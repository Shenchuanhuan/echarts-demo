import React, { Component } from 'react';
import { Tooltip } from 'antd';


const text = 'the tooltip message'
export default class Charts extends Component {
    render() {
        return (
            <div>
                <h2>first page</h2>
                <Tooltip title={text}>
                  <span style={{display: 'inline-block', border: '1px solid #000'}}>hover me and I will show you some message!</span>
                </Tooltip>
            </div>
        )
    }
}