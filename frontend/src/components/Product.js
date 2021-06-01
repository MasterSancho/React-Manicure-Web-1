import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
 return (
  <Card className='my-3 p-3 rounded'>
   <LinkContainer to={`/product/${product._id}`}>
    <Card.Img src={product.image} variant='top' />
   </LinkContainer>
  </Card>
 );
};

export default Product;
