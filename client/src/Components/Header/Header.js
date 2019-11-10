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

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

    }

    

    render(){
        return(
            <div>
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/" style={{color:"white"}}>Inscripciones E.E.S.T N°7</NavbarBrand>
                <NavbarToggler onClick={ () => this.setState({ isOpen: !this.state.isOpen }) } />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="navItem">
                            <NavLink href="/login" style={{color:"white"}}>Iniciar Sesion</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink href="/signup" style={{color:"white"}}>Registrarse</NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

        );
    }
}

export default Header;