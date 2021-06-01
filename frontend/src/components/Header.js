import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
 return (
  <header>
   <Navbar expand='lg' variant='dark' collapseOnSelect>
    <Container>
     <LinkContainer to='/'>
      <Image src='/images/003-Logo_corp.png' />
     </LinkContainer>
     <Navbar.Toggle aria-controls='basic-navbar-nav' />
     <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'>
       <LinkContainer to='/cart'>
        <Nav.Link>Cart</Nav.Link>
       </LinkContainer>
       <LinkContainer to='/signin'>
        <Nav.Link>Log In</Nav.Link>
       </LinkContainer>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;
