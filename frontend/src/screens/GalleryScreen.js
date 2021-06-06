import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const GalleryScreen = () => {
 return (
  <Container className='my-3'>
   <h1 className='text-center py-3'>עבודות אחרונות</h1>
   <Row>
    {products.map((product) => (
     <Col key={product._id} sm={10} md={6} lg={4} xl={3}>
      <Product product={product} />
     </Col>
    ))}
   </Row>
  </Container>
 );
};

export default GalleryScreen;
