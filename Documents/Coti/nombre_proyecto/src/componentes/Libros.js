// Libros.js
import React from 'react';
import libro1 from './libro1.jpg';
import libro2 from './libro2.jpg';
import libro3 from './libro3.jpg';


function Libros() {
  return (
    <div className="libros-container">
  
      <h2>Descarga mis libros</h2>
      <div>
      
      <img src={libro1} alt='libro portada' className='libro'/>
       
      </div>
      <div>
      
        <img src={libro2} alt='libro portada' className='libro'/>
      </div>

      <div>
       
        <img src={libro3} alt='libro portada' className='libro'/>
      </div>
    </div>
  );
}

export default Libros;
