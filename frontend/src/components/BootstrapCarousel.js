import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import products from '../products';

const BootstrapCarousel = () => {
 return (
  <Carousel pause='hover' interval='2000'>
   {products.map((product) => (
    <Carousel.Item key={product._id}>
     <Link to={`/product/${product._id}`}>
      <Image src={product.image} alt={product.name} fluid />
      <Carousel.Caption className='carousel-caption'>
       <h2>
        {product.name} <i className='fas fa-shekel-sign fa-sm'></i>
        {product.price}
       </h2>
      </Carousel.Caption>
     </Link>
    </Carousel.Item>
   ))}
  </Carousel>
 );
};

export default BootstrapCarousel;
