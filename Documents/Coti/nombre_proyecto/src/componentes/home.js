import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import coti2 from './coti6.jpg';




function Home() {
  return (
    <ParallaxBanner y={[-80, 20]}>
      <img className="foto" src={coti2} alt="Constanza San Pedro sonriendo a la cámara"/>
    <div className="container">
  
   
    
    
   
  
    
    <h1>Coti San Pedro</h1>
    <p className='texto'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
   


      
    </div>
    </ParallaxBanner>
  );
}

export default Home;
