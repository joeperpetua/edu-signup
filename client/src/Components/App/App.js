//Dependencies
import React, {Component} from 'react';
import {Container} from 'reactstrap';

//Styles
import './App.css';

//Components
import Header from '../Header/Header'
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js';

class App extends Component {
  
  render(){
    return (
      <Container fluid={true}>
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
  
}

export default App;
