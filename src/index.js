import React, { Component } from 'react';
import { render } from 'react-dom';
import {  Router, Route, hashHistory , IndexRoute, IndexRedirect} from 'react-router';

import Home from 'Container/home';
import Charts from 'Container/charts';
import Second from 'Container/second';
import Third from 'Container/third';


const root = document.querySelector('#rt');
const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/charts" component={Charts}/>
        <Route path="/second" component={Second}/>
        <Route path="/third" component={Third}/>
    </Router>
)

render(route, root);
