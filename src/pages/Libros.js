import React from 'react';
import libro1 from '../componentes/libro1.jpg';
import libro2 from '../componentes/libro2.jpg';
import libro3 from '../componentes/libro3.jpg';

function Libros() {
  return (
    <div className="container text-center libros-container">
      <h2>Descarga mis libros</h2>
      
      <div className="row libros-wrapper">
        <div className="col-sm-4 libro-container">
          <img src={libro1} alt='libro portada' className='libro img-fluid' />
        </div>
        <div className="col-sm-8 libro-container d-flex align-items-center">
          <div className="libro-text">
            <p>Descripción del libro 1. Este libro trata sobre...</p>
          </div>
        </div>
      </div>

      <div className="row libros-wrapper mt-4">
        <div className="col-sm-4 libro-container">
          <a href='https://chirimbote.com.ar/wp-content/uploads/2022/03/Filosofar-con-Memorias-DIGITAL.pdf' target='_blank' rel="noopener noreferrer">
            <img src={libro2} alt='libro portada' className='libro img-fluid' />
          </a>
        </div>
        <div className="col-sm-8 libro-container d-flex align-items-center">
          <div className="libro-text">
            <p>Descripción del libro 2. Este libro trata sobre...</p>
          </div>
        </div>
      </div>

      <div className="row libros-wrapper mt-4">
        <div className="col-sm-4 libro-container">
          <a href="https://chirimbote.com.ar/wp-content/uploads/2023/10/Filosofar-Derechos.pdf" target='_blank' rel="noopener noreferrer">
            <img src={libro3} alt='libro portada' className='libro img-fluid' />
          </a>
        </div>
        <div className="col-sm-8 libro-container d-flex align-items-center">
          <div className="libro-text">
            <p>Descripción del libro 3. Este libro trata sobre...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Libros;
