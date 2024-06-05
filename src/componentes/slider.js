import React from 'react';
import { Carousel } from 'react-bootstrap';

/* Imágenes [No sé porqué no me tomaba las rutas directamente]*/
import habitat from '../slider-img/habitat.png';
import juventud from '../slider-img/juventud.jpg';
import salud from '../slider-img/8061.jpg';


function Slider() {
  return (
      
    <Carousel indicators carousel-indicators>
      
 
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={salud}
            alt="Salud"
          />
        
          <Carousel.Caption>
            <h3>Salud</h3>
            <p>Leer diagnóstico y propuestas.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={juventud}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Juventud</h3>
            <p>Leer diagnóstico y propuestas.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={habitat}
            alt="Third slide"
          />
        
          <Carousel.Caption>
            <h3>Hábitat</h3>
            <p>Leer diagnóstico y propuestas.</p>
          </Carousel.Caption>
      
        </Carousel.Item>

    </Carousel>
     
  );
}

export default Slider;
