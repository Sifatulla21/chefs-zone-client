import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import HotItems from '../Pages/Home/HotItems/HotItems';
import Quots from '../Pages/Home/Quots/Quots';

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Container>
                <Row>
                    <Col lg={12} xl={12} md={12} sm={1}><Outlet></Outlet></Col>   
                   <Col lg={12} xl={12} md={12} sm={1}><HotItems></HotItems></Col>
                   <Col lg={12} xl={12} md={12} sm={1}><Quots></Quots></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;