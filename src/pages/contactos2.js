import React from 'react';
import logo1 from '../componentes/logo1.jpg';
import logo2 from '../componentes/logo2.jpg';
import logo3 from '../componentes/logo3.jpg';


const Contactos2 = () => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-md">
          <img src={logo1} alt="Imagen 1" className="img-fluid" /><br/>
          <b class="texto3">Sumate a Militar💪 </b>
          <p class="texto3">Podes participar de las brigadas sociocomunitarias y de diferentes jornadas solidarias</p>
        </div>
        <div className="col-md">
          <img src={logo2} alt="Imagen 2" className="img-fluid" /><br/>
          <b class="texto3">Contame tu Propuesta 💡</b>
          <p class="texto3">Escribime para que lo pensemos juntxs </p>
        </div>
        <div className="col-md">
          <img src={logo3} alt="Imagen 3" className="img-fluid" /><br/>
          <b class="texto3">Aporte económico ✅</b>
          <p class="texto3">Podes ser suscriptor mensual o aportante único; si te interesa contribuir <a href='#'>hace click acá!</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contactos2;
