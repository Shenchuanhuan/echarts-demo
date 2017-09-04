import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
    render() {
        return (
            <div>echarts-demo</div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.querySelector('#root')    
)