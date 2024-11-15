import React, { useState } from 'react';
import './App.css';
import logoImage from './assets/imagenes/Soul_Meter.jpg'; // Cambia a la ruta de tu imagen

function footer() {

  return (
    <footer className="footer">
        <div>
        <img src={logoImage} alt="Logo" />
        <h1 style={{ fontSize: '1rem' }}>Hollow Knight Wiki | 2024 ©</h1>
        </div>
    </footer>
  );
}

export default footer;