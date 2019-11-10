import React from 'react';
import { Container, Row, Col } from 'reactstrap';

//Styles 
import './Footer.css';



class Footer extends React.Component {
    render(){
        return(
            <Container fluid={true} className="footer bg-primary text-light">
                <Row>
                    <Col sm="4">
                        <h3>Sobre E.E.S.T N7</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </Col>
                    <Col sm="4">
                        <h3>Sobre este portal</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </Col>
                    <Col sm="4">
                        <h3>Contacto</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;