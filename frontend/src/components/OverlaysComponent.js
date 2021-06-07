import React from 'react';
import { Card, Image } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';

const OverlaysComponent = () => {
 return (
  <Card>
   <Image src='./images/thumb-1920-706578.png' fluid roundedCircle />
   <Card.ImgOverlay>
    <BootstrapCarousel />
   </Card.ImgOverlay>
  </Card>
 );
};

export default OverlaysComponent;
