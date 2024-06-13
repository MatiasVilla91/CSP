import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link'; // Importa NavHashLink
import CSP from './CSP.png'; // Asegúrate de que la ruta a la imagen es correcta

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <img src={CSP} alt='logo' className='CSP'/>
        <Nav className="mr-auto">
          {/* Usa NavLink de react-router-hash-link con scroll suave */}
          <NavLink smooth to="/#inicio" className="menu-link nav-link">Inicio</NavLink>
          <NavLink smooth to="/#Articulos" className="menu-link nav-link">Articulos</NavLink>
          <NavLink smooth to="/#Contacto" className="menu-link nav-link">Contacto</NavLink>
          <NavLink smooth to="/#Libros" className="menu-link nav-link">Libros</NavLink>
          <NavLink smooth to="/#Profesora" className="menu-link nav-link">Profesora</NavLink>
          <NavLink smooth to="/#Filosofa" className="menu-link nav-link">Filósofa</NavLink>
          <NavLink smooth to="/#FPG" className="menu-link nav-link">Frente Patria Grande</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
