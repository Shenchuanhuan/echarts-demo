import React, { Component } from 'react';
import Echarts from 'echarts';

//数据
const DATA = [10, 20, 30, 40, 50, 60, 70, 80];
const XAXIS_DATA = ['一', '二', '三', '四', '五', '六', '七', '八'];


export default class BasicPie extends Component {

    componentDidMount() {
        this.setOption();
    }
    setOption = () => {
        const basicBar = Echarts.init(this.refs.basicPie);
        let option = {
            title: {
                text: '饼图',
                subtext: '基本饼图',
                left: 'left'
            },
            series: [
                {
                    type: 'pie',
                    data: DATA,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        };
        basicBar.setOption(option);
    }
    render() {
        return (
            <div ref='basicPie' style={{width: '100%', height: '100%'}}></div>
        )
    }
}