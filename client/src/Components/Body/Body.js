import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";

//Styles 
import './Body.css';

class Body extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <Switch>
                    <Route exact path="/"  component={Home} />
                    <Route exact path="/login"  component={Login} />
                    <Route exact path="/signup"  component={Signup} />
                </Switch>
        );
    }
}

export default Body;