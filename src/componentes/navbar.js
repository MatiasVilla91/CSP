import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="¿Quién es Coti?" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cotisanpedro">Coti San Pedro</NavDropdown.Item>
              <NavDropdown drop="end" title="Publicaciones" id="publicaciones-dropdown">
                <NavDropdown.Item as={Link} to="/publicaciones/libros">Libros</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/publicaciones/articulos">Artículos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/publicaciones/notas">Notas</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            {/* <Nav.Link as={Link} to="/libros">Libros</Nav.Link>
            <Nav.Link as={Link} to="/profesora">Profesora</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/fpg">FPG</Nav.Link>
            <Nav.Link as={Link} to="/articulos">Artículos</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
