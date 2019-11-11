import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

//Styles 
import './Header.css';

//Components
import Login from './Login/Login';
import Signup from './Signup/Signup';



class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            cont: 0
        }

    }


    componentDidUpdate(){
        if(this.props.user){
          var user = this.props.user;
          console.log(user);
        }
    }

    toggleNav = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

   
   

    render(){

        

        return(
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Inscripciones E.E.S.T N7</NavbarBrand>
                <NavbarToggler onClick={ this.toggleNav } />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>


                        <NavItem>
                            <Login userData={this.props} />
                        </NavItem>
                        {' '}
                        <NavItem>
                            <Signup userData={this.props} />
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>

        </div>

        );
    }
}

export default Header;