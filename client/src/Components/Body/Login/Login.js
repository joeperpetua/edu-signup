import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Styles 
import './Login.css';

class Login extends React.Component {
    render(){
        return(
            <Container className="login">
                <h1 style={{textAlign:"center"}}>Login</h1>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form className="hola">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <div style={{textAlign:"center"}}>
                                <Button color="primary">Submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;