import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones de componentes
// *Nota: Se ha removido la importación duplicada de './componentes/home.js'
import Navbar from './componentes/navbar';
import Home from './componentes/home';
import Contacto from './componentes/contacto';
import Libros from './componentes/Libros'; // Asegúrate de que el nombre del archivo sea correcto (mayúsculas o minúsculas)
import Profesora from './componentes/profesora';
import Fpg from './componentes/FPG'; // Asegúrate de que el nombre del archivo sea correcto (mayúsculas o minúsculas)
import Footer from './componentes/footer';
import ArticlesSection from './componentes/ArticlesSection'; // Asegúrate de que el nombre del archivo sea correcto (mayúsculas o minúsculas)
import Slider from './componentes/slider';
import ArticleBody from './articulos/articulo'; // Asegúrate de que la ruta al artículo sea correcta
import Filosofa from './componentes/filosofa';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Navbar /> {/* Asegúrate de que Navbar esté actualizado para usar NavHashLink si es necesario */}
          <header className="App-header">
            <Routes>
              {/* La ruta principal '/' con todos los componentes */}
              <Route path="/" element={
                <>
                  <Home id="inicio" />
                  <Slider />
                  <Contacto id="contacto" />
                  <ArticlesSection id="articulos" />
                  <Fpg id="fpg" />
                  <Libros id="libros" />
                  <Filosofa id="filosofa" />
                  <Profesora id="profesora" />
                  <Footer />
                </>
              } />
              {/* Ruta para ver el artículo individual */}
              <Route path="/article/:id" element={<ArticleBody />} />
            </Routes>
          </header>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;