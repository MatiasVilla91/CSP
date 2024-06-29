// Noticias.js
import React from 'react';

function Noticias() {
  const noticias = [
    {
      titulo: 'Noticia 1',
      descripcion: 'Descripción de la noticia 1...',
      fecha: '2024-06-27'
    },
    {
      titulo: 'Noticia 2',
      descripcion: 'Descripción de la noticia 2...',
      fecha: '2024-06-26'
    },
    // Añade más noticias aquí
  ];

  return (
    <div className="noticias-container">
      <h2>Últimas Noticias</h2>
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index} className="noticia-item">
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
            <span>{noticia.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;
