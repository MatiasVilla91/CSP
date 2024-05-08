import React from "react";
import insta from './ins.png';
import x from './x.png'
import f from './f.png'
function Footer() {
  return (
    <footer className="footer">
     
      <div className="redes">
       
       <img src={insta} alt='logo instagram' className='instagram'/>
       <img src={x} alt='logo x' className='x'/>
       <img src={f} alt='logo f' className='f'/>
      </div>
     
    </footer>
  );
}

export default Footer;
