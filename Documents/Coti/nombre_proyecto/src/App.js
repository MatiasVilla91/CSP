//import coti1 from '../src/coti1.jpg';

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

function App() {
  return (
   

    <div className="App">
      <header className="App-header">
      
        <div>  <Navbar/>  </div>

        <div id="inicio">  <Home/> </div> 
        
       
       
        <div id="Libros"> <Libros/>  </div>
       
        <div id="Profesora"> <Profesora/> </div>
        <div id="FPG"><Fpg/></div>
        
        <div id="Contacto">  <Contacto /> </div>
        <div> <Footer/> </div>
        
       
      </header>
    </div>
    
  );
}

export default App;
