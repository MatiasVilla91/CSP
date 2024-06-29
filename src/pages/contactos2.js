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
          <b class="texto3">Sumate a Militar!💪 </b>
          <p class="texto3">¿Querés fortalecer a la construcción del Frente Patria Grande? En tiempos donde prima el individualismo, te invitamos a fortalecer la organización. Seguimos para saber qué hacemos asi te podes sumar a las brigadas, actividades y las jornadas solidarias.
          </p>
        </div>
        <div className="col-md">
          <img src={logo2} alt="Imagen 2" className="img-fluid" /><br/>
          <b class="texto3">¿Venis pensando en alguna idea o proyecto colectivo? 💡</b>
          <p class="texto3">Escribinos para que lo pensemos juntxs. </p>
        </div>
        <div className="col-md">
          <img src={logo3} alt="Imagen 3" className="img-fluid" /><br/>
          <b class="texto3">¿Te interesa hacer un aporte económico? ✅</b>
          <p class="texto3">Para colaborar con el trabajo que hacemos podes sumarte como suscriptor mensual o como aportante único. Te vamos mandando nuestras novedades y acciones en nuestro resumen mensual.</p>
        </div>
      </div>
    </div>
  );
};

export default Contactos2;
