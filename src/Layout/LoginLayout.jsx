import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const LoginLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}><Outlet></Outlet></Col>    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;