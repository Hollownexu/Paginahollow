import { useState } from 'react'
import './inicio.css'
import '../App.css'
import Header from '../header'
import Footer from '../footer'
import ImgBanner1 from '../assets/imagenes/page_1_banner.jpeg';
import ImgBanner2 from '../assets/imagenes/page_2_banner.jpg';
import tribu1 from '../assets/imagenes/tribu_mantis.jpg';
import tribu2 from '../assets/imagenes/tribu_grimm.jpg';
import tribu3 from '../assets/imagenes/tribu_chamanes.jpg';
import tribu4 from '../assets/imagenes/tribu_polillas.jpg';
import tribu5 from '../assets/imagenes/tribu_hongos.jpg';


function Home() {
  return (
    <>
    <Header></Header>
      <main className='illuminated-background'>
        <div className='pagina-1-contenedor-1'>
          <img src={ImgBanner1} alt="Banner 1" className='imagen-banner-inicio'/>
          <p>Hallownest es un reino subterráneo que fue fundado por los insectoides, una civilización avanzada que buscaba refugio en las profundidades de la tierra. Con el tiempo, Hallownest se convirtió en un lugar próspero y poderoso, con una rica cultura y tecnología.</p>
        </div>
        <div className='pagina-1-contenedor-2'>
          <div className='pagina-1-contenedor-2-bg'   
          style={{ 
              backgroundImage: `url(${ImgBanner2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}  ></div>
          <p className='contenido-banner-2'>La Plaga: Una plaga misteriosa comenzó a afectar a los habitantes de Hallownest, convirtiéndolos en criaturas monstruosas y corruptas. La plaga se extendió rápidamente, y pronto el reino estuvo al borde de la destrucción.</p>
          <a href='/knight' className="mas-button">Ver Más</a>
        </div>
        <div className='pagina-1-contenedor-3'>
            <h1 style={{ fontSize: '2rem' }}>Tribus y Grupo social</h1>
            <div className='contendor-grid-5'>
              <div>
                <img src={tribu1} alt="Tribu 1" className=''/>
                <h2>La tribu Mantis</h2>
                <p>Conservan su intelecto y su honor, aunque también sus tradiciones letales.</p>
              </div>              
              <div>
                <img src={tribu2} alt="Tribu 2" className=''/>
                <h2>La Compañía de los Grimm</h2>
                <p>Enciende la linterna de la pesadilla y sirve a la terrible tropa de los hermanos Grimm.
                </p>
              </div>              
              <div>
                <img src={tribu3} alt="Tribu 3" className=''/>
                <h2>Los chamanes caracoles</h2>
                <p>Hay algo poderoso en el aura de esta criatura, pero no parece malicioso.</p>
              </div>              
              <div>
                <img src={tribu4} alt="Tribu 4" className=''/>
                <h2>La tribu de las polillas</h2>
                <p>Abandonaron la luz que los había engendrado. Le dieron la espalda... Incluso la olvidaron.</p>
              </div>              
              <div>
                <img src={tribu5} alt="Tribu 5" className=''/>
                <h2>El clan de los hongos</h2>
                <p>La fuerza está en el yo compartido. La fuerza está en la mente unida.</p>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
