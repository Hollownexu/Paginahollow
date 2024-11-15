import { useState } from 'react'
import './knight.css'
import Header from '../header'
import Footer from '../footer'
import ImgBanner1 from '../assets/imagenes/caballero_hueco.jpg';
import divider from '../assets/imagenes/divider_1.png';
import divider2 from '../assets/imagenes/divider_2.png';
import knight1 from '../assets/imagenes/knight_clavo.jpg';
import knight2 from '../assets/imagenes/knight_hechizos.png';
import knight3 from '../assets/imagenes/Soul_Meter.jpg';
import knight4 from '../assets/imagenes/The_Knight.png';


function knight() {
  const scrollToSection = () => {
    const section = document.getElementById('caballero');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Header></Header>
      <main className='illuminated-background'>
        <div className='pagina-2-contenedor-1'>
          <div>
            <h1 style={{ fontSize: '2rem'}}>El Caballero Hueco</h1>
            <img src={ImgBanner1} alt="Banner 1" className='imagen-banner-1'/>
            <button className="button" onClick={scrollToSection}> Ver Más </button>
          </div>
          <div className='contenido-banner-1'>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px'}}>Un vagabundo enigmático que desciende a Hallownest llevando únicamente una uña rota para defenderse de sus enemigos.</h3>
            <p style={{ fontSize: '1rem'}}>
            El Caballero es un Vaso descartado. Son los hijos del Rey Pálido y la Dama Blanca, 
            nacidos en el Abismo con el Vacío dentro de su caparazón. Avispón es la hermana del 
            Caballero a través de su padre compartido. Al igual que el resto de sus hermanos Vaso, 
            el Caballero no tiene género.
            </p>
          </div>
        </div>
        <div id='caballero' className='pagina-2-contenedor-2'>
            <h1 style={{ fontSize: '2rem' }}>Características</h1>
            <div className='contendor-grid-4'>
              <div>
                <img src={knight1} alt="Clavo" className=''/>
                <h2>Clavo</h2>
                <p>El Herrero de Clavos de la Ciudad de las Lágrimas puede mejorar el Clavo de Caballero hasta 4 veces si usa Geo y Mineral Pálido , que aumentan el daño de los golpes de Clavo.</p>
              </div>              
              <div>
                <img src={knight2} alt="Hechizos" className=''/>
                <h2>Hechizos y habilidades</h2>
                <p>Los hechizos son habilidades especiales del Caballero: Enfoque recupera salud; Espíritu Vengativo o Alma de Sombra lanzan un proyectil hacia adelante; Espectros Aulladores o Grito del Abismo atacan hacia arriba; e Inmersión Desolada u Oscuridad Descendente dañan a los enemigos debajo del Caballero.
                </p>
              </div>
              <div>
                <img src={knight3} alt="Alma" className=''/>
                <h2>Alma</h2>
                <p>En el juego, el Alma aparece en el HUD como un medidor circular que se llena de líquido blanco, formando la cara del Caballero. Este medidor puede contener hasta 99 unidades de Alma, pero al morir el Caballero se reduce a 66, volviendo a 99 cuando se derrota a la Sombra.</p>
              </div>              
              <div>
                <img src={knight4} alt="Aspecto" className=''/>
                <h2>Aspecto</h2>
                <p>El Caballero es una pequeña figura con cuerpo negro, cabeza blanca en forma de máscara con dos cuernos largos y ojos negros sin pupilas. Lleva una capa gris y empuña un aguijón como arma, contribuyendo a la atmósfera enigmática del juego con su diseño minimalista y misterioso.</p>
              </div>  
              </div>            
            </div>
            <div className='pagina-2-contenedor-3'>
              <img src={divider} alt="Divisor 1" className='divider'/>
              <div>
                <h1 style={{ fontSize: '2rem'}}>Salud, Sombra y Alma</h1>
                <p className=''>La salud se representa mediante máscaras , que se muestran en la esquina superior izquierda de la pantalla. El caballero comienza el juego con 5 máscaras y puede obtener más recolectando fragmentos de máscara . 4 fragmentos de máscara crean una nueva máscara de salud, hasta un máximo de 9 máscaras de salud en total. La salud se pierde al recibir daño, ya sea de enemigos o de peligros ambientales.</p>
                <p>Cuando las máscaras se agotan a 0, el caparazón del caballero se rompe, lo que libera su SOMBRA . Después de que la pantalla se desvanece de negro, el caballero está de vuelta en el banco en el que se descansó por última vez con un tercio de su indicador de ALMA faltante y sin ningún Geo .</p>
                <p>ALMA se representa como una cara circular a la izquierda del indicador de salud. ALMA se usa para lanzar hechizos , incluido el de concentración.</p>
              </div>
              <img src={divider2} alt="Divisor 2" className='divider2'/>
            </div>
            <div>
              <h1 style={{ fontSize: '2rem'}}>Equipamiento</h1>
              <div className='contendor-grid-4'>          
              <div>
                <h2>Clavo</h2>
                <p>El arma principal del Caballero, capaz de moverse en cualquier dirección. El Clavo se puede mover hacia abajo mientras el Caballero está sobre púas, enemigos o ciertos objetos, lo que puede ser una herramienta útil para atravesar Hallownest.</p>
              </div>  
              <div>
                <h2>Amuletos</h2>
                <p>Baratijas especiales que se adquieren a través de aventuras o comprándoselas a otros insectos.</p>
              </div>  
              <div>
                <h2>Hechizos</h2>
                <p>Estos ataques mágicos , adquiridos por primera vez del Chamán Caracol , infligen grandes cantidades de daño en ráfagas cortas, a costa de ALMA.</p>
              </div>  
              <div>
                <h2>Talento</h2>
                <p>Habilidades y herramientas que se encuentran en todo Hallownest y que permiten al Caballero atravesar el terreno de manera más efectiva y enfrentarse a los enemigos en combate, como correr , saltar por la pared , hacer súper correr y realizar doble salto .</p>
              </div>  
              </div>
            </div>
      </main>
      <Footer />
    </>
  )
}

export default knight
