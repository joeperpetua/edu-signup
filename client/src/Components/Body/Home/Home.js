import React, { Component } from 'react';


class Home extends Component {
    
    constructor(props){
        super(props);

        var renderText = null;
        const renderButton = null;
        console.log(renderText);
    }



    componentDidUpdate(){
        if(this.props.user){
          var user = this.props.user;
          console.log(user);
          if(user){
                this.renderText = <p>Hello, {this.props.user.displayName} {this.props.user.uid} {this.props.user.email} {this.props.user.name}</p>;
                const renderButton = <button onClick={this.props.user.signOut}>Sign out</button>;
            }else{
                this.renderText = <p>Please sign in.</p>;
                const renderButton = <button onClick={this.props.user.signInWithGoogle}>Sign in with Google</button>;
            }
        }
        console.log(this.renderText)
    }

    render(){
        return(
            <div>
                
                {this.renderText}


            </div>
        );
    }
}

export default Home;