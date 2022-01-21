import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'



function NavBar() {
    return (
        <div className="navbar">
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/Profile">Users List</Nav.Link>
      <Nav.Link as={Link} to="/About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    )
}

export default NavBar
