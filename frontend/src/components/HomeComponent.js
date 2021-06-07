import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const HomeComponent = () => {
 return (
  <Container>
   <Row className='justify-content-md-center mb-3'>
    <Col sm>
     <Image src='./images/thumb-1920-706578.png' fluid roundedCircle />
    </Col>
   </Row>
  </Container>
 );
};

export default HomeComponent;
