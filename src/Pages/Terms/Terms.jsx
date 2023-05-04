import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Terms and Conditions</h1>
          <p>Welcome to our chefs zone! These terms and conditions outline the rules and regulations for the use of our website.</p>
          <p>By accessing this website, we assume you accept these terms and conditions in full. If you disagree with these terms and conditions, or any part of them, you must not use our website.</p>
          <h2>Content</h2>
          <p>All content on this website, including text, images, and videos, are the property of our website or its content suppliers and are protected by international copyright laws. You may not reproduce, distribute, or use any of the content on this website without our written permission.</p>
          <h2>Accuracy of Information</h2>
          <p>We strive to ensure that all information on our website is accurate and up-to-date. However, we make no guarantees or warranties as to the accuracy, completeness, or suitability of the information provided on our website.</p>
          <h2>Links to Third-Party Sites</h2>
          <p>Our website may contain links to third-party websites. These links are provided for your convenience only and do not imply endorsement or approval of the content on those sites. We are not responsible for the content or privacy practices of any third-party sites.</p>
          <h2>User Content</h2>
          <p>If you post or submit any content to our website, including comments, reviews, or feedback, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.</p>
          <h2>Limitation of Liability</h2>
          <p>In no event shall our website or its affiliates, directors, officers, employees, agents, partners, suppliers, or licensors be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>
          <h2>Governing Law</h2>
          <p>These terms and conditions shall be governed by and construed in accordance with the laws of [your state/country]. Any disputes arising from these terms and conditions shall be resolved in [your preferred forum for dispute resolution].</p>
          <h2>Changes to Terms and Conditions</h2>
          <p>We reserve the right to change these terms and conditions at any time without notice. Your continued use of our website after any such changes constitutes your acceptance of the new terms and conditions.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about these terms and conditions, please contact us at [your contact email or address].</p>
          <p>Thank you for using our chef site!</p>
          <Button><Link className="text-decoration-none text-white" to="/register/">Go To Register</Link></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Terms;