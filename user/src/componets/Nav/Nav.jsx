import React from 'react';
import './Nav.css';
import LogoLowrisk from '../../Multimedia/Nav/LogoLowrisk.svg'


const Nav = () => {
 

  return (
    <div className="nav">
      <img src={LogoLowrisk} alt="" />
      <ul className='ulNav'>
        <li>Home</li>
        <li>Cálculo de hipotecas</li>
        <li>Funcionalidades Extra</li>
        <li>Trabaja con Nosotros</li>
        <li>Contacto</li>
        <li>FAQ</li>
        <li>Iniciar Sesión</li>
      </ul>
    </div>
  );
};

export default Nav;