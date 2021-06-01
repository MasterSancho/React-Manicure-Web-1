import React from 'react';
import { Carousel, Container, Card } from 'react-bootstrap';

const CarouselComp = () => {
 return (
  <div className=''>
   <Container>
    <Carousel sm={12} md={6} lg={4} xl={3}>
     <Carousel.Item interval={2000}>
      <Card.Img
       className='w-50 my-3 p-3 rounded'
       src='/images/001.jpg'
       alt='First slide'
      />
      {/* <img  /> */}
      <Carousel.Caption>
       {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero</p> */}
      </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item interval={2000}>
      <Card.Img
       className='w-50 my-3 p-3 rounded'
       src='/images/002.jpg'
       alt='Second slide'
      />
      {/* <img /> */}
      <Carousel.Caption>
       {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet</p> */}
      </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item interval={2000}>
      <Card.Img
       className='w-50 my-3 p-3 rounded'
       src='/images/004.jpg'
       alt='Third slide'
      />
      {/* <img /> */}
      <Carousel.Caption>
       {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna</p> */}
      </Carousel.Caption>
     </Carousel.Item>
    </Carousel>
   </Container>
  </div>
 );
};

export default CarouselComp;
