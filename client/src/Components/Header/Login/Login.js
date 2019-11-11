import React from 'react';
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
import './Login.css';



class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            cont: 0
        }

    }

    // componentDidUpdate(){
        
    //     if(this.state.cont === 1){
    //         var userData = this.props.userData;
    //         console.log(userData.user.uid);
    //     }
    //     this.state.cont++;
    //     console.log(this.state.cont);

    // }


    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
        console.log(this.state.modal);
    }

    render(){
        

        return(
            <React.Fragment>
                <Button color="" onClick={ this.toggleModal }>Iniciar Sesion</Button>
                <Modal isOpen={this.state.modal} toggle={ this.toggleModal }>
                    <ModalHeader toggle={ this.toggleModal }>Iniciar Sesion</ModalHeader>
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
                        </Form>

                        <div className="clearfix">
                            <Button close className="float-left"><i class="fab fa-google-plus-g"></i></Button>
                            
                        </div>
                                            
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={ this.toggleModal }>Iniciar Sesion</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Login;