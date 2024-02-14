import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio" className="menu-link">Inicio</Nav.Link>
         
          <Nav.Link href="#Libros" className="menu-link">Libros</Nav.Link>
          <Nav.Link href="#Profesora" className="menu-link">Profesora</Nav.Link>
          <Nav.Link href="#FPG" className="menu-link">Frente Patria Grande</Nav.Link>
          <Nav.Link href="#Contacto" className="menu-link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
