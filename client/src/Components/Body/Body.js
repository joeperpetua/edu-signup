import React from 'react';
import { Switch, Route} from "react-router-dom";

//Components
import Home from "./Home/Home";


//Styles 
import './Body.css';

class Body extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cont: 0
        }

    }

    componentDidUpdate(){
        if(this.props.user){
          var user = this.props.user;
          console.log(user);
        }
    }
    
    render(){
        return(<div></div>
                // <Switch>
                //     <Route exact path="/"  render={(props) => <Home {...props} user={this.props.user} />} />
                // </Switch>
        );
    }
}

export default Body;