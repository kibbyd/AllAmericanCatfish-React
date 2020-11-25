import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Gallery = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>This is the Gallery.</h1>
                    <h3>This is a <a href="/shop">link</a> to somewhere</h3>                
                </Col>   
            </Row>
        </Container>
    );
}

export default Gallery;