import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                            <Login />
                        </NavItem>
                        {' '}
                        <NavItem>
                            <Signup />
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>


            
        </div>

        );
    }
}

export default Header;