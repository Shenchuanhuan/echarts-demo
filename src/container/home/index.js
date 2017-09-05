import React,{ Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Link to='/first'>First</Link></li>
                    <li><Link to='/second'>Second</Link></li>
                    <li><Link to='/third'>Third</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default Home;