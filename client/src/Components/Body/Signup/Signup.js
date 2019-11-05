import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Styles 
import './Signup.css';

class Singup extends Component {

    render(){
        return(
            <Container className="signup">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Singup;