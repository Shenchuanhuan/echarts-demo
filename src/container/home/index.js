import React,{ Component } from 'react';
import { Link } from 'react-router';

import Head from 'Component/head';

class Home extends Component {
    render() {
        return(
            <div>
                <Head/>
                <ul>
                    <li><Link to='/first'>First</Link></li>
                    <li><Link to='/second'>Second</Link></li>
                    <li><Link to='/third'>Third</Link></li>
                </ul>
            </div>
        )
    }
}
export default Home;