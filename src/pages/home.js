import React from 'react';
import coti2 from '../componentes/cotiJuan3.jpg';
import Slider from './slider';
import Contacto from './contacto';

function Home() {
  return (
    <div className="img-container">
      <img className="foto" src={coti2} alt="Constanza San Pedro sonriendo a la cámara"/> 
      <h1>Coti San Pedro</h1>
      <p className='texto'> 
      Hola ! Soy Coti San Pedro. Soy docente de Filosofía, trabajo en una escuela primaria y en la Universidad Nacional de Córdoba.
Estoy convencida de que la política es una herramienta de transformación social y que es necesario la construcción de una alternativa en la Provincia de Córdoba que garantice una mejor calidad de vida de todxs lxs cordobeses. Necesitamos que las nuevas generaciones podamos asumir el compromiso de cambiar la realidad. 
Estamos en un contexto social y político muy complejo, que requiere más que nunca del fortalecimiento de los lazos sociales, del encuentro con otrxs. 
Te cuento lo que venimos haciendo, para que puedas sumarte.
      </p>

      <p>ESTO ES UNA PRUEBA </p>
     
     <Contacto/>
     <Slider/>
    </div>
   
   
    
    
  );
}

export default Home;
