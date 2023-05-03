import React from 'react';
import { Container, Row, Col, Image, Nav, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../../public/vite.svg';

function Footer() {
  return (
    <footer className="bg-dark py-4" style={{ width: "100%" }}>
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={logo} alt="My Company Logo" className="mb-3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat pharetra arcu, non convallis felis tincidunt in.</p>
          </Col>
          <Col lg={4} className="mb-3 mb-lg-0">
            <h5 className="text-light mb-3">Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col lg={4}>
            <Nav className="justify-content-center justify-content-lg-end">
            <ListGroup>
                    <ListGroup.Item>Follow Us</ListGroup.Item>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center text-light">
            <p>&copy; 2023 My Company, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;