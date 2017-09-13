import React, { Component } from 'react';

import './index.scss';

class DragBox extends Component {
    
    

    render() {
        return(
            <div className='CC-dragBox'>
                {this.props.children}
            </div>
        )
    }
}

export default DragBox;