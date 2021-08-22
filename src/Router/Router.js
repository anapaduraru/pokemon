import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import All from '../Components/All/All';
import Favorites from '../Components/Favorites/Favorites';
import AboutUs from '../Components/AboutUs/AboutUs';
import Pokemon from '../Components/Pokemon/Pokemon';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/all' component={All} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/pokemon' component={Pokemon} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
