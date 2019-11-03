import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import Login from "./Login/Login";

//Styles 
import './Body.css';

class Body extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <Switch>
                    <Route exact path="/"  component={Login} />
                </Switch>
        );
    }
}

export default Body;