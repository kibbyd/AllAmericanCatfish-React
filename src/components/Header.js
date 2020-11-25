import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return(
        <Container fluid>
            <Row className="header d-flex justify-content-center">
                <Col xs={6} sm={2}>
                    <a href="/"><img src="/assets/images/aac-logo.png" width="175px" alt="logo"/></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;