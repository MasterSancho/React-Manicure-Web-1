import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
 return (
  <header>
   <Navbar expand='lg' variant='dark' collapseOnSelect>
    <Container>
     <LinkContainer to='/'>
      <Nav.Link>
       <Image src='/images/003-Logo_corp.png' />
      </Nav.Link>
     </LinkContainer>
     <Navbar.Toggle aria-controls='basic-navbar-nav' />
     <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'>
       <LinkContainer to='/aboutLakGel'>
        <Button type='button' className='btn btn-primary me-1'>
         מה זה לק ג’ל
        </Button>
       </LinkContainer>
       <LinkContainer to='/gallery'>
        <Button type='button' className='btn btn-primary'>
         גלריה עבודות
        </Button>
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
