import React from "react";
import CotiFilo from './Coti_San_Pedro_Niunamenos2.jpg'

function Filosofa(){
    return(
        <div class="container" id="Filosofa">
            <h2>Filósofa</h2>
             <img src={CotiFilo} alt="Coti hablando" className="Coti5" />
             <div className="texto">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

        </div>

    )

}

export default Filosofa;