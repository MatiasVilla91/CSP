import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="¿Quién es Coti?" id="basic-nav-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item as={Link} to="/cotisanpedro">Coti San Pedro</NavDropdown.Item>
              <NavDropdown drop="end" title="Publicaciones" id="publicaciones-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/Libros">Libros</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/articulos">Artículos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/publicaciones/notas">Notas</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
