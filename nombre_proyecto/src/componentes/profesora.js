import React from 'react';
import coti4 from './Coti-San-Pedro2.jpg';
import { Parallax } from 'react-scroll-parallax';

function Profesora() {
  return (
    <div className="container">
      <h2>Profesora</h2>
      <Parallax y={[-500, 20]}>
        <div className="foto">
          <img src={coti4} alt="Coti hablando" className="Coti4" />
        </div>
        <div className="content">
          <div className="texto">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Profesora;
