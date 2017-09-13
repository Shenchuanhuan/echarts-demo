import React, { Component } from 'react';

export default class Menu extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className='C_Menu'>
                <div className='C_Menu_icon'></div>
                <div className='C_Menu_list'>
                    <ul>
                    </ul>
                </div>
            </div>
        )
    }
}