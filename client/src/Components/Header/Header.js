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
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Inscripciones E.E.S.T N7</NavbarBrand>
                <NavbarToggler onClick={ () => this.setState({ isOpen: !this.state.isOpen }) } />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">Iniciar Sesion</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Registrarse</NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

        );
    }
}

export default Header;