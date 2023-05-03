import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';;
import Left from '../Pages/Left/Left';
import Right from '../Pages/Right/Right';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Container>
                <Row>
                   <Col lg={1} sm={1}><Left></Left></Col>
                    <Col lg={10} sm={1}><Outlet></Outlet></Col>   
                    <Col lg={1} sm={1}><Right></Right></Col> 
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;