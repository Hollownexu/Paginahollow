import { useState } from 'react';
import './objetos.css';
import Header from '../header';
import Footer from '../footer';
import llave1 from '../assets/imagenes/Simple_Key.jpg';
import llave2 from '../assets/imagenes/Elegant_Key.jpg';
import llave3 from '../assets/imagenes/Love_Key.jpg';
import llave4 from '../assets/imagenes/Shopkeepers_Key.jpg';
import llave5 from '../assets/imagenes/City_Crest.jpg';
import llave6 from '../assets/imagenes/Kings_Brand_inventory.jpg';
import mision1 from '../assets/imagenes/Tram_Pass.jpg';
import mision2 from '../assets/imagenes/Lumafly_Lantern.jpg';
import mision3 from '../assets/imagenes/Scroll_Map_Feather.jpg';
import mision4 from '../assets/imagenes/Collectors_map_LB.jpg';
import mision5 from '../assets/imagenes/Hunters_journal.jpg';
import mision6 from '../assets/imagenes/Hunters_Mark.jpg';
import mision7 from '../assets/imagenes/Delicate_Flower.jpg';
import mision8 from '../assets/imagenes/Ruined_Flower.jpg';
import mision9 from '../assets/imagenes/Godtuner.jpg';
import divider from '../assets/imagenes/divider_1.png';
import divider2 from '../assets/imagenes/divider_2.png';
import mejora1 from '../assets/imagenes/Health_Piece.jpg';
import mejora2 from '../assets/imagenes/Vessel_Fragment.jpg';
import mejora3 from '../assets/imagenes/Blessing.jpg';

function Avispon() {
  const [visibleSection, setVisibleSection] = useState('llaves');

  const showSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <>
      <Header />
      <main className='illuminated-background'>
        <div style={{ paddingTop: '2.5rem' }}>
          <h1 style={{ fontSize: '2.5rem' }}>Objetos de Hollow Knight</h1>
          <div className='grid-botones' style={{ display: 'flex' }}>
            <button className='button' onClick={() => showSection('llaves')}>Ver Llaves</button>
            <button className='button' onClick={() => showSection('misiones')}>Ver Misiones</button>
            <button className='button' onClick={() => showSection('mejoras')}>Ver Mejoras</button>
          </div>
        </div>

        {visibleSection === 'llaves' && (
          <div className='pagina-2-contenedor-2'>
            <img src={divider} alt="Divisor 1" className='divider' />
            <h1 style={{ fontSize: '2rem' }}>Llaves del juego</h1>
            <div className='contendor-grid-objetos'>
              <div>
                <img src={llave1} alt="Llave 1" />
                <h2>Llave simple</h2>
                <p>Fabricado a bajo costo a partir de un diseño común. Puede utilizarse para abrir una variedad de cerraduras simples. De fabricación endeble, se rompe tras un solo uso.</p>
              </div>              
              <div>
                <img src={llave2} alt="Llave 2" />
                <h2>Llave elegante</h2>
                <p>Llave adornada realizada en metal blanco brillante. Lleva la marca del Santuario del Alma de Hallownest y brilla tenuemente en la oscuridad.</p>
              </div>
              <div>
                <img src={llave3} alt="Llave 3" />
                <h2>La clave del amor</h2>
                <p>Cubierto de relleno, lleva un símbolo de amor.</p>
              </div>              
              <div>
                <img src={llave4} alt="Llave 4" />
                <h2>Llave del comerciante</h2>
                <p>Pequeña llave de latón realizada con la imagen de un comerciante.</p>
              </div>
              <div>
                <img src={llave5} alt="Llave 5" />
                <h2>Escudo de la ciudad</h2>
                <p>Losa de piedra con el escudo de la capital de Hallownest. Tiene un inserto en la parte posterior que encajaría en una ranura.</p>
              </div>
              <div>
                <img src={llave6} alt="Llave 6" />
                <h2>La marca del rey</h2>
                <p>Marca al portador como Rey. Los lugares antiguos de Hallownest se abrirán ante él.</p>
              </div>
            </div>
          </div>
        )}

        {visibleSection === 'misiones' && (
          <div className='pagina-2-contenedor-2'>
            <img src={divider} alt="Divisor 1" className='divider' />
            <h1 style={{ fontSize: '2rem' }}>Exploración y misiones</h1>
            <div className='contendor-grid-objetos'>
              <div>
                <img src={mision1} alt="Misión 1" />
                <h2>Pase de tranvía</h2>
                <p>Un pase de por vida para los tranvías que conectan partes de Hallownest. Estos pases cuestan una gran cantidad de georgianos y cada compra requiere la autorización del Rey.</p>
              </div>              
              <div>
                <img src={mision2} alt="Misión 2" />
                <h2>Linterna Lumafly</h2>
                <p>Linterna de cristal que contiene una Lumafly. Ilumina las cavernas oscuras para que los viajeros puedan encontrar su camino.</p>
              </div>
              <div>
                <img src={mision3} alt="Misión 3" />
                <h2>Mapa y pluma</h2>
                <p>Mapa de Hallownest. Cuando se descansa en un banco o en otro lugar, se puede utilizar la pluma para actualizar el mapa con las áreas recién descubiertas.</p>
              </div>              
              <div>
                <img src={mision4} alt="Misión 4" />
                <h2>Mapa del coleccionista</h2>
                <p>Se mostrarán las ubicaciones de los Grubs encarcelados.</p>
              </div>  
              <div>
                <img src={mision5} alt="Misión 5" />
                <h2>Diario del cazador</h2>
                <p>Un compendio de todos los enemigos encontrados en Hollow Knight, entregado al Caballero por el Cazador.</p>
              </div>  
              <div>
                <img src={mision6} alt="Misión 6" />
                <h2>Marca del cazador</h2>
                <p>La marca de un verdadero cazador.</p>
              </div>  
              <div>
                <img src={mision7} alt="Misión 7" />
                <h2>Flor delicada</h2>
                <p>Te lo entregó la Dolida Gris en los Campos de Descanso. Te pidió que lo colocaras en la tumba de su amante mantis en los Jardines de la Reina. La flor es muy frágil y se destruirá si recibes daño o montas en los Stagways.</p>
              </div>  
              <div>
                <img src={mision8} alt="Misión 8" />
                <h2>Flor arruinada</h2>
                <p>Entregado a usted por el Doliente Gris en los Terrenos de Descanso. Ha sido destruido y ahora no tiene ningún valor como objeto de sentimiento.</p>
              </div>
              <div>
                <img src={mision9} alt="Misión 9" />
                <h2>Sintonizador de Dios</h2>
                <p>Dispositivo que resuena con seres de gran poder. Brilla intensamente al derrotar a enemigos poderosos.</p>
              </div>
            </div>
          </div>
        )}

        {visibleSection === 'mejoras' && (
          <div className='pagina-2-contenedor-2'>
            <img src={divider} alt="Divisor 1" className='divider' />
            <h1 style={{ fontSize: '2rem' }}>Mejoras</h1>
            <div className='contendor-grid-objetos'>
              <div>
                <img src={mejora1} alt="Mejora 1" />
                <h2>Fragmento de máscara</h2>
                <p>Un fragmento de una máscara antigua, usada para protegerse de cualquier daño. Reúne más para fortalecer tu caparazón y protegerte de daños.</p>
              </div>              
              <div>
                <img src={mejora2} alt="Mejora 2" />
                <h2>Fragmento de vasija</h2>
                <p>Fragmento de una vasija blanca hecha para contener el alma. Reúne más para formar un recipiente lleno, lo que te permitirá transportar más alma.</p>
              </div>
              <div>
                <img src={mejora3} alt="Mejora 3" />
                <h2>La bendición de Salubra</h2>
                <p>Una bendición otorgada por el amante del encanto Salubra. A los bienaventurados les sigue la belleza y el amor.</p>
              </div>               
            </div>
          </div>
        )}
        <img src={divider2} alt="Divisor 2" className='divider2' />
      </main>
      <Footer />
    </>
  );
}

export default Avispon;
