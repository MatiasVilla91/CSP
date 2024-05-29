// Libros.js
import React from 'react';
import libro1 from './libro1.jpg';
import libro2 from './libro2.jpg';
import libro3 from './libro3.jpg';

function Libros() {
  return (
    <div className="libros-container">
      <h2>Descarga mis libros</h2>
      <div className="libros-wrapper">
        <div className="libro-container">
         <img src={libro1} alt='libro portada' className='libro'/>
        </div>
        <div className="libro-container">
        <a href='https://chirimbote.com.ar/wp-content/uploads/2022/03/Filosofar-con-Memorias-DIGITAL.pdf' target='blank'> <img src={libro2} alt='libro portada' className='libro'/></a>
        </div>
        <div className="libro-container">
        <a href="https://chirimbote.com.ar/wp-content/uploads/2023/10/Filosofar-Derechos.pdf" target='blank'> <img src={libro3} alt='libro portada' className='libro'/></a>
        </div>
      </div>
    </div>
  );
}

export default Libros;
