import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ChefCard from '../Pages/Home/ChefCard/ChefCard';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
           {/* <ChefCard></ChefCard> */}
            <Container>
                <Row>
                    <Col lg={9} sm={1}><Outlet></Outlet></Col>
                    <Col lg={9} sm={1}><ChefCard></ChefCard></Col>
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;