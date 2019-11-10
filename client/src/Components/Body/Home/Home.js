import React, { Component } from 'react';
import {Jumbotron,Container} from 'reactstrap';

class Home extends Component {

    render(){
        return(
            <div style={{marginTop:"5%"}}>
                <Jumbotron fluid>
                    <Container fluid style={{textAlign:"center"}}>
                    <h1 className="display-3">Escuela tecnica N°7</h1>
                    <h2 className="display-5">Jose Hernandez de Avellaneda</h2>
                    <p className="lead">Estilo en Pos de la Excelencia</p>
                    </Container>
                </Jumbotron>
            </div>  
        );
    }
}

export default Home;