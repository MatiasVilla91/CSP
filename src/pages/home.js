import React from 'react';
import coti2 from '../componentes/coti2024b.jpg';
import Slider from './slider';
import Contacto from './contacto';
import Contactos2 from './contactos2';

function Home() {
  return (
    <div className="img-container">
      <img className="foto" src={coti2} alt="Constanza San Pedro sonriendo a la cámara"/> 
      <h1>Coti San Pedro</h1>
      <p className='texto'> 
      Mi nombre es Coti San Pedro. Nací y crecí en la ciudad de Córdoba. Me formé como docente e investigadora en Filosofía. Me dedico a dar clases en el nivel primario y en la Universidad Nacional de Córdoba. 
Soy militante y dirigente del Frente Patria Grande. Tengo la convicción de que la política es una herramienta de transformación social y que las nuevas generaciones debemos asumir el compromiso de cambiar la realidad. 
Quienes habitamos la provincia de Córdoba necesitamos un proyecto político alternativo que garantice una mejor calidad de vida para todxs.
Vivimos en un contexto social y político muy complejo que requiere, más que nunca, el fortalecimiento de los lazos sociales y hacer comunidad.
Por eso quiero compartir con vos este proyecto e invitarte a que te sumes.
      </p>

      <Slider/>
  
     <Contactos2/>
     
    
    
    
     
    </div>
   
   
    
    
  );
}

export default Home;
