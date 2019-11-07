import React from 'react';
import { Switch, Route} from "react-router-dom";

//Components
import Home from "./Home/Home";


//Styles 
import './Body.css';

class Body extends React.Component {

    
    render(){
        return(
                <Switch>
                    <Route exact path="/"  component={Home} />
                </Switch>
        );
    }
}

export default Body;