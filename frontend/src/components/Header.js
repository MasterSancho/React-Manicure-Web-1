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
       <LinkContainer to='/waze' className='me-1 p-2'>
        <Button type='button' className='btn btn-primary ' size='lg'>
         {/* <i className='fab fa-waze fa-2x'></i>  */}
         Waze
        </Button>
       </LinkContainer>
       <LinkContainer to='tel:0548002334' className='me-1 p-2'>
        <Button type='button' className='btn btn-primary ' size='lg'>
         054-800-2334
        </Button>
       </LinkContainer>
       <LinkContainer to='/aboutLakGel' className='me-1 p-2'>
        <Button type='button' className='btn btn-primary' size='lg'>
         מה זה לק ג’ל
        </Button>
       </LinkContainer>
       <LinkContainer to='/gallery' className='me-1 p-2'>
        <Button type='button' className='btn btn-primary' size='lg'>
         גלריה עבודות
        </Button>
       </LinkContainer>
       <LinkContainer to='/signin' className='me-1 p-2'>
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
