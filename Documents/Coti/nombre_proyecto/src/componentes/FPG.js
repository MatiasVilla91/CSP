import React from "react";
import fpg_logo from './Frente_patria_grande.png';

function FPG(){
    return(
        <div className="fpg">
            <h3>Frente Patría Grande - Córdoba -</h3>
            
            <img src={fpg_logo} className="fpg_logo" alt="Logo Frente Patria Grande" />
            <div className="content">   
           
                <div className="texto">
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
           
        </div>
    );
} 

export default FPG;
