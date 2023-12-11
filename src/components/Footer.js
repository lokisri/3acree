import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="fixed-bottom" style={{ textAlign: 'right', paddingRight: '15px' }}>
      <hr className="my-3 bg-dark" />
      <Container>
        <Row>
          <Col sm>
            <h5>Services</h5>
            <p>
              Free Preliminary Verification<br />
              Thorough Legal Verification<br />
              Get Your Land Surveyed<br />
              Land Monitoring
            </p>
          </Col>
          <Col sm className="offset-sm-1">
            <h5>Company</h5>
            <p>
              Terms and Conditions<br />
              Privacy Policy
            </p>
          </Col>
          <Col sm className="offset-sm-1">
            <h5>Contacts</h5>
            <p>+91-95553995833 </p>
          </Col>
          <Col sm className="offset-sm-1">
            <h5>Email</h5>
            <p>lokesh936291@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <div style={{ fontSize: '20px' }}>@ 2023 - 3acre.in - All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
