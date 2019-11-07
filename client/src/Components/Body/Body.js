import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import Home from "./Home/Home";


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
                </Switch>
        );
    }
}

export default Body;