import React from "react";
import insta from './ins.png';
import x from './x.png'
import f from './f.png'
function Footer() {
  return (
    <footer className="footer">
     
      <div className="redes">
       
       <a href="https://www.instagram.com/cotisanpedro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> <img src={insta} alt='logo instagram' className='instagram' /></a>
       <a href="https://twitter.com/cotisanpedro" target="_blank" rel="noopener noreferrer"><img src={x} alt='logo x' className='x'/></a>
       <a href="https://www.facebook.com/cotisanpedro" target="blank" rel="noopener noreferrer"><img src={f} alt='logo f' className='f'/></a>
      </div>
     
    </footer>
  );
}

export default Footer;
