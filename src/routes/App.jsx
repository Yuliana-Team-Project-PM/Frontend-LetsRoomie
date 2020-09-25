import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom'

import '../assets/styles/App.scss';

import Home from '../pages/Home';
import Login from '../pages/Login';

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
