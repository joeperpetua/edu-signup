import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Styles 
import './Signup.css';

class Singup extends Component {

    render(){
        return(
            <Container className="signup">
            <h1 style={{textAlign:"center"}}>SignUp</h1>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form className="hola">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email placeholder" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="ConfirmPassword">Confirm Password</Label>
                                <Input type="password" name="password" id="ConfirmPassword" placeholder="Confirm Password placeholder" />
                            </FormGroup>
                            <div style={{textAlign:"center"}}>
                                <Button color="primary" md="5">Submit</Button>
                            </div>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Singup;