import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../screens/Home'
import Product from '../screens/Product'
import NavBar from '../components/NavBar'
const RouterScreen = () => {
    return(
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/product/:Id' component={Product}/>
                </Switch>
            </Router>
        </>
    )
}

export default RouterScreen