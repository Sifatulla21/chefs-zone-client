import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import HotItems from '../Pages/HotItems/HotItems';
import Quots from '../Pages/Quots/Quots';

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Container>
                <Row>
                    <Col lg={12} sm={1}><Outlet></Outlet></Col>   
                   <Col lg={12} sm={1}><HotItems></HotItems></Col>
                   <Col lg={12} sm={1}><Quots></Quots></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;