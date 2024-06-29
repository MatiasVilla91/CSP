import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './componentes/navbar';
import Home from './pages/home';
import Contacto from './pages/contacto';
import Libros from './pages/Libros';
import Profesora from './pages/profesora';
import FPG from './pages/FPG';
import Footer from './componentes/footer';
import ArticlesSection from './pages/ArticlesSection';
import ArticleBody from '../src/articulos/articulo';
import Filosofa from './pages/filosofa';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/libros" element={<Libros />} />
              <Route path="/profesora" element={<Profesora />} />
              <Route path="/filosofa" element={<Filosofa />} />
              <Route path="/fpg" element={<FPG />} />
              <Route path="/articulos" element={<ArticlesSection />} />
              <Route path="/article/:id" element={<ArticleBody />} />
            </Routes>
          </header>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;