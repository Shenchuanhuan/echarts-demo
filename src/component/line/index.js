import React, { Component } from 'react';
import Echarts from 'echarts';

//数据
const DATA = [10, 20, 30, 40, 50, 60, 70, 80];
const XAXIS_DATA = ['一', '二', '三', '四', '五', '六', '七', '八'];


export default class BasicLine extends Component {

    componentDidMount() {
        this.setOption();
    }
    setOption = () => {
        const basicBar = Echarts.init(this.refs.basicLine);
        let option = {
            title: {
                text: '折线图',
                subtext: '基本折线图',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: XAXIS_DATA
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    type: 'line',
                    data: DATA
                }
            ]
        };
        basicBar.setOption(option);
    }
    render() {
        return (
            <div ref='basicLine' style={{width: '100%', height: '100%'}}></div>
        )
    }
}