import React,{ Component } from 'react';
import { Link } from 'react-router';


import './index.scss';

class Home extends Component {
    render() {
        return(
            <div className='cc_HomePage'>
                <div className='cc_HomePage_Head'>
                    <div className='Head_child'><Link>Home</Link></div>
                    <div className='Head_child'><Link to='/charts'>Charts</Link></div>
                    <div className='Head_child'><Link>Animate</Link></div>
                    <div className='Head_child'><Link>Other</Link></div>
                    <div className='Head_child'><Link>About</Link></div>
                </div>
                <div className='cc_HomePage_Body'>1111</div>
            </div>
        )
    }
}
export default Home;
