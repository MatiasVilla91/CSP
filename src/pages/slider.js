import React from 'react';
import { Carousel } from 'react-bootstrap';

/* Imágenes [No sé porqué no me tomaba las rutas directamente]*/

import salud from '../slider-img/carrusel-brigadas-01.png';
import habitat from '../slider-img/carrusel-brigadas-02.png';
import educativas from '../slider-img/carrusel-brigadas-03.png'
import ambiente from '../slider-img/carrusel-brigadas-04.png'
import feminismo from '../slider-img/carrusel-brigadas-05.png'


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
          
            
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={habitat}
            alt="Second slide"
          />

          <Carousel.Caption>
          
           
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={educativas}
            alt="Third slide"
          />
        
          <Carousel.Caption>
          

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={4000}>
        <img
            className="d-block w-100"
            src={ambiente}
            alt="Third slide"
          />   
           <Carousel.Caption>
          

          </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={4000}>
        <img
            className="d-block w-100"
            src={feminismo}
            alt="Third slide"
          />   
           <Carousel.Caption>
          

          </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
     
  );
}

export default Slider;
