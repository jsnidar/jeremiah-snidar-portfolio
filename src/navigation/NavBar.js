import React from 'react';
import { Container, Navbar, Nav, Image} from 'react-bootstrap';
import { Linkedin, Medium, Github } from 'react-bootstrap-icons';

const NavBar = () => {

  const links = <>
    <Nav.Link href="/about-me">About</Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    <Nav.Link href="/blog-posts">Blog</Nav.Link>
    <Nav.Link href='/education'>Education</Nav.Link>
    <Nav.Link href='/contact'>Contact</Nav.Link>
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
              Jeremiah Snidar {' '}
          </Navbar.Brand>
          <Navbar.Brand>
            <Linkedin
              onClick={()=> window.open('http://www.linkedin.com/in/jeremiah-snidar')}
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Github
              onClick={()=> window.open('https://github.com/jsnidar')}
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Medium
              onClick={()=> window.open('https://medium.com/@jsnidar')}
            />
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