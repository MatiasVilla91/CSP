import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import coti2 from './coti6.jpg';




function Home() {
  return (
    <ParallaxBanner y={[-80, 20]}>
    <div className="container">
  
   
    
    
   
  
    <img className="foto" src={coti2} alt="Constanza San Pedro sonriendo a la cámara"/>
    <h1>Coti San Pedro</h1>
    <p className='texto'>Hola soy Coti y  aliquip ex ea commodo consequat
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       aliquip ex ea commodo consequat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      
       </p>
   


      
    </div>
    </ParallaxBanner>
  );
}

export default Home;
