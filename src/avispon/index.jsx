import { useState } from 'react'
import './avispon.css'
import Header from '../header'
import Footer from '../footer'
import ImgBanner1 from '../assets/imagenes/avispon.jpg';
import divider from '../assets/imagenes/divider_1.png';
import divider2 from '../assets/imagenes/divider_2.png';
import knight1 from '../assets/imagenes/hornet_aguja.jpg';
import knight2 from '../assets/imagenes/hornet_herramientas.png';
import knight3 from '../assets/imagenes/hornet_seda.png';
import knight4 from '../assets/imagenes/hornet_aspecto.png';


function avispon() {
  const scrollToSection = () => {
    const section = document.getElementById('avispon');
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
            <h1 style={{ fontSize: '2rem'}}>Avispón</h1>
            <img src={ImgBanner1} alt="Banner 1" className='imagen-banner-1'/>
            <button className="button" onClick={scrollToSection}> Ver Más </button>
          </div>
          <div className='contenido-banner-1'>
            <h3 style={{ fontSize: '1rem', marginBottom: '12px'}}>Avispón es la misteriosa princesa protectora de las ruinas de Hallownest , un personaje principal de Hollow Knight y la protagonista jugable de Hollow Knight: Silksong. Maneja una aguja e hilo con una destreza letal.</h3>
            <p style={{ fontSize: '1rem'}}>
            Avispón es capturada por insectos forasteros y llevada a su reino, Pharloom , pero escapa de su jaula antes de llegar a su destino. Luego debe luchar contra enemigos y resolver misterios para ascender en una peregrinación mortal a la cima de este reino.
            </p>
          </div>
        </div>
        <div id='avispon' className='pagina-2-contenedor-2'>
            <h1 style={{ fontSize: '2rem' }}>Características</h1>
            <div className='contendor-grid-4'>
              <div>
                <img src={knight1} alt="Clavo" className=''/>
                <h2>Aguja</h2>
                <p>Aguja es el término utilizado para describir el arma blanca que maneja Avispón. La aguja está unida con un hilo de seda.</p>
              </div>              
              <div>
                <img src={knight2} alt="Hechizos" className=''/>
                <h2>Herramientas</h2>
                <p>Hasta ahora se han revelado cuatro categorías de herramientas. Pero solo se sabe sobre las herramientas de la categoría roja podrán ser consumibles de uso limitado.
                </p>
              </div>
              <div>
                <img src={knight3} alt="Alma" className=''/>
                <h2>Seda</h2>
                <p>Hornet usa 4 hebras de seda para unir un hilo a su aguja, lanzándolo hacia afuera y tirándolo hacia atrás en rápida sucesión. Este ataque puede golpear a varios enemigos y no restaura la seda.</p>
              </div>              
              <div>
                <img src={knight4} alt="Aspecto" className=''/>
                <h2>Aspecto</h2>
                <p>Es una figura esbelta con una máscara blanca en forma de cono invertido y ojos negros sin pupilas. Viste una capa roja que parece un vestido largo y empuña una aguja como arma, conectada a un hilo de seda. Su diseño refleja su agilidad y destreza en combate.</p>
              </div>  
              </div>            
            </div>
            <div className='pagina-2-contenedor-3'>
              <img src={divider} alt="Divisor 1" className='divider'/>
              <div>
                <h1 style={{ fontSize: '2rem'}}>Salud y Seda</h1>
                <p className=''>La salud se representa mediante máscaras , que se muestran en la esquina superior izquierda de la pantalla. Hornet comienza el juego con 5 máscaras y puede obtener más. La salud se pierde al recibir daño, ya sea de los enemigos o de los peligros ambientales. La salud se puede recuperar mediante el uso de la habilidad Bind, que consume un carrete de seda completo.</p>
                <p>La seda se representa como un carrete debajo del indicador de salud. El hilo se consume al usar habilidades especiales, incluida una forma de enfoque llamada Bind. Golpear a los enemigos con la aguja llena el carrete con dos hilos. Cuando el carrete está lleno, el símbolo que representa el lado del carrete que queda a la izquierda del indicador de salud se llena.</p>
              </div>
              <img src={divider2} alt="Divisor 2" className='divider2'/>
            </div>
            <div>
              <h1 style={{ fontSize: '2rem'}}>Otros</h1>
              <div className='contendor-grid-4'>          
              <div>
                <h2>Talento</h2>
                <p>Las habilidades consumen hilo de seda para usarlas.</p>
              </div>  
              <div>
                <h2>Inventario</h2>
                <p>Hornet puede recolectar y conservar varios objetos a lo largo de su viaje, que se almacenan en su inventario y pueden estar relacionados con misiones específicas.</p>
              </div>  
              <div>
                <h2>Trivialidades</h2>
                <p>En la página de Steam de Silksong, a Hornet la llaman "Princesa Caballero".</p>
              </div> 
              </div>
            </div>
      </main>
      <Footer />
    </>
  )
}

export default avispon
