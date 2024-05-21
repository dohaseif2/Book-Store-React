import React from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../css/nav.css'
export  function Mynav() {
  return (
    <Navbar className='custom-navbar'>
        <Container>
          <Navbar.Brand href="#home">ITI</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/books">Books</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
