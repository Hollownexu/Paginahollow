import React, { useState } from 'react';
import './Header.css';
import logoImage from './assets/imagenes/Soul_Meter.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="burger-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="logo-image">
          <img src={logoImage} alt="Logo" />
        </div>
      </div>
      <div>
        <a className="header-title-contenedor" href='/'>
        <h1 className="header-title">Hollow</h1>
        <h1 className="header-title">Knight</h1>
        </a>
      </div>

     

      {isMenuOpen && (
        <nav className="submenu">
          <button className="close-button" onClick={toggleMenu}>x</button>
          <div>
            <a href="/">Inicio</a>
            <a href="/knight">Caballero</a>
            <a href="/avispon">Avispón</a>
            <a href="/objetos">Objetos</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
