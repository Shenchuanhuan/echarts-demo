import React, { Component } from 'react';
import { render } from 'react-dom';
import {  Router, Route, browserHistory , IndexRoute, IndexRedirect} from 'react-router';

import Home from 'Container/home';
import First from 'Container/first';
import Second from 'Container/second';
import Third from 'Container/third';

const root = document.querySelector('#rt');
const route = (
    <Router history={browserHistory }>
        <Route path="/" component={Home}/>
        <Route path="/first" component={First}/>
        <Route path="/second" component={Second}/>
        <Route path="/third" component={Third}/>
    </Router>
)

render(route, root);
