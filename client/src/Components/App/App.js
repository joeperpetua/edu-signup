//Dependencies
import React, {Component} from 'react';
import {Container} from 'reactstrap';

//Firebase

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';


//Styles
import './App.css';

//Components
import Header from '../Header/Header'
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      user: null,
      data: null
    };



  }

  componentDidMount(){
  
    console.log(" ");
    console.log("--------componentDidMount----------");



    if(this.props.user){

      try{
        this.setState = ({
        user : this.props.user,
        data: this.props
        });

        console.log("Se modifico el state");
      }catch(e){
        console.log(e);
      }

      

    }else{
      console.log("No se modifico el state");
    }

    console.log("this.state.user: ", this.state.user);
    console.log("this.state.data: ", this.state.data);
    console.log("this.props: ", this.props);
    console.log("this.props.user: ", this.props.user);
  }



  componentDidUpdate(){
    console.log(" ");
    console.log("--------componentDidUpdate----------");

    if(this.props.user){

      try{
        this.setState = ({
        user : this.props.user,
        data: this.props
        });

        console.log("Se modifico el state");
      }catch(e){
        console.log(e);
      }

      

    }else{
      console.log("No se modifico el state");
    }

    console.log("this.state.user: ", this.state.user);
    console.log("this.state.data: ", this.state.data);
    console.log("this.props: ", this.props);
    console.log("this.props.user: ", this.props.user);
  }


  render(){
    console.log(" ");
    console.log("--------render----------");
    console.log("this.state.user: ", this.state.user);
    console.log("this.state.data: ", this.state.data);
    console.log("this.props: ", this.props);
    console.log("this.props.user: ", this.props.user);

    

    return (
      <Container fluid={true}>
        <Header data={this.data} user={this.user} />
        {
        this.props.user 
          ? <p>Hello, {this.props.user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        this.props.user
          ? <button onClick={this.props.signOut}>Sign out</button>
          : <button onClick={this.props.signInWithGoogle}>Sign in with Google</button>
      }
        <Body data={this.data} user={this.user} />
        <Footer />
      </Container>
    );
  }
  
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

