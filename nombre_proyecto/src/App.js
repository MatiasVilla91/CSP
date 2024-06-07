
import './App.css';

import Home from './componentes/home';
import Navbar from './componentes/navbar';
import './componentes/home.js';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './componentes/contacto.js';
import Libros from './componentes/Libros.js';
import Profesora from './componentes/profesora.js';
import Fpg from './componentes/FPG.js'
import Footer from './componentes/footer.js';
import ArticlesSection from './componentes/ArticlesSection.js';
import Slider from './componentes/slider.js'
import ArticleBody from './articulos/articulo.js';
import Filosofa from './componentes/filosofa.js';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

    function App() {
      return (
        <Router>
          <ParallaxProvider>
            <div className="App">
              <Navbar />
              <header className="App-header">
                <Routes> {/* Cambiar 'Switch' por 'Routes' */}
                  {/* La ruta principal '/' con todos los componentes */}
                  <Route path="/" element={
                    <>
                      <Home/>
                      <Slider/>
                      <Contacto/>
                      <ArticlesSection/>
                      <Fpg />
                      <Libros />
                      <Filosofa />
                      <Profesora />
                      <Footer/>
                    </>
                  } />
                  {/* Ruta para ver el artículo individual */}
                  <Route path="/article/:id" element={<ArticleBody />} /> {/* Cambio de 'component' a 'element' */}
                </Routes>
              </header>
            </div>
          </ParallaxProvider>
        </Router>
      );
    }
    
    export default App;
    
