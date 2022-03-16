import React from 'react';
import { Container, Navbar, Nav, Image} from 'react-bootstrap';

const NavBar = () => {

  const links = <>
    <Nav.Link href="/">About</Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    <Nav.Link href="/blog-posts">Blog</Nav.Link>
    <Nav.Link href='/education'>Education</Nav.Link>
  </>
  
  return (
      <Navbar className='navigation' bg='dark' variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
          <Image
          alt=""
          src="/profile.JPG"
          width="30"
          height="30"
          roundedCircle={true}
          className="d-inline-block align-top"
        />{' '}
            Jeremiah Snidar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              {links}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;