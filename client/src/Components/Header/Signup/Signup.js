import React, { Component } from 'react';
import { Button,
    Form,
    FormGroup,
    Label,
    Input, 
    Modal,
    ModalHeader, 
    ModalBody,
    ModalFooter } from 'reactstrap';

//Styles 
import './Signup.css';

class Singup extends Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false
        }

    }


    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
        console.log(this.state.modal);
    }

    render(){
        const closeBtn = <button className="close" onClick={ this.toggleModal }>&times;</button>;
        return(
            <React.Fragment>
                <Button color="" onClick={ this.toggleModal }>Registrarse</Button>
                <Modal isOpen={this.state.modal} toggle={ this.toggleModal }>
                    <ModalHeader toggle={ this.toggleModal }>Registrarse</ModalHeader>
                    <ModalBody>
                                    
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
                        </Form>

                        <div className="clearfix">
                            <Button close className="float-left"><i class="fab fa-google-plus-g"></i></Button>
                        </div>                    
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={ this.toggleModal }>Registrarse</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Singup;