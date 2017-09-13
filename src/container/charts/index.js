import React, { Component } from 'react';
import { Tooltip } from 'antd';
import DragBox from 'Component/dragBox';
import Menu from 'Component/menu';

import './index.scss';

import BasicBar from 'Component/bar';
import BasicLine from 'Component/line';
import BasicPie from 'Component/pie';

export default class Charts extends Component {
    render() {
        return (
            <div className='charts-container'>
                <div className='charts-demo'>
                    <DragBox>
                        <BasicBar />
                    </DragBox>
                    <DragBox>
                        <BasicLine />
                    </DragBox>
                    <DragBox>
                        <BasicPie />
                    </DragBox>
                </div>
            </div>
        )
    }
}