import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
  return (
    <footer style={{position: 'relative',
      bottom: '0',
      width: '100%'}} className="bg-dark text-white">
      <Container className=" mx-auto">
        <Row className="py-3">
          <Col xs={12} sm={6} md={4} lg={4}>
            <h5>Sign up for our newsletter</h5>
            <Form>
              <Form.Group>
                <Form.Label>Enter your email</Form.Label>
                <div className="d-flex">
                <Form.Control className="w-50" type="email" placeholder="Email address" />
              <Button variant="primary" type="submit">Subscribe</Button>

                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <h5>Contact us</h5>
            <p>
              <FaPhone size={20} className="mr-2" /> (123) 456-7890<br />
              <FaEnvelope size={20} className="mr-2" /> info@chefszone.com<br />
              <FaMapMarkerAlt size={20} className="mr-2" /> 123 Main St, Dahaka, Bangladesh
            </p>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <h5>Connect with us</h5>
            <div className="d-flex flex-column">
              <div className="d-flex">
              <a href="#"><FaFacebook size={20} className="mr-2" /></a> Facebook
              </div>
              <div className="d-flex">
              <a href="#"><FaTwitter size={20} className="mr-2" /></a> Twitter
              </div>
              <div className="d-flex">
              <a href="#"><FaInstagram size={20} /></a>  Instagram
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2023 Chefs Zone</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;