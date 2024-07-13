import React from 'react';
import { Carousel } from 'react-bootstrap';

import coti from '../img-slider2/1.jpg';
import coti3 from '../img-slider2/2.jpg';
import coti4 from '../img-slider2/6.jpg';
import coti5 from '../img-slider2/5.jpg';

function Slider2() {
  return (
    <div className="slider2-container">
      <Carousel indicators={false}>
        <Carousel.Item interval={8000}>
          <img
            className="d-block slider2-image"
            src={coti}
            alt="Salud"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block slider2-image"
            src={coti3}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block slider2-image"
            src={coti4}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block slider2-image"
            src={coti5}
            alt="Fourth slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider2;
