import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxTest = () => {
  return (
    <div className="Parallax">
      <h2>Parallax Test</h2>
      <div className="parallax-container">
        <Parallax y={[-80, 20]}>
          <img src="https://argentinahumana.com.ar/_nuxt/image1.WX9j9pXa.png" alt="Parallax Image" className='foto'/>
        </Parallax>
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut est nec lectus ultricies varius.</p>
        </div>
      </div>
    </div>
  );
}

export default ParallaxTest;
