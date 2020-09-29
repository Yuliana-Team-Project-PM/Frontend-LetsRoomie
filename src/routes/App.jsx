import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom'

import '../assets/styles/App.scss';

import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Login from '../pages/Login';
import CreateAcountSelect from '../pages/CreateAcountSelect';
import CreateHostAcount from '../pages/CreateHostAccount';
import CreateGuestAcount from '../pages/CreateGuestAccount';
import RoomDetails from '../pages/RoomDetails';
import PerfilEdit from '../pages/PerfilEdit';
import Favorites from '../pages/Favorites';
import AddRoom from '../pages/AddRoom';
import Profile from '../pages/Profile';

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/select-acount" component={CreateAcountSelect} />
                <Route exact path="/acount-guest" component={CreateGuestAcount} />
                <Route exact path="/acount-host" component={CreateHostAcount} />
                <Route exact path="/room-details" component={RoomDetails} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/SearchResults" component={SearchResults} />
                <Route exact path="/addRoom" component={AddRoom} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
