import React from 'react';
import './Home.css';
import botonDerecho from '../../Multimedia/Home/botonDerecho.svg'
import botonIzquierdo from '../../Multimedia/Home/botonIzquierdo.svg'
import ChicaEnFlores from '../../Multimedia/Home/ChicaEnFlores.svg'
import flechaboton from '../../Multimedia/Home/flechaboton.svg'

const Home = () => {
 

  return (
    <div className="Home">
      <section className='header'>
        <div className='uno'>

            <div><img src={botonDerecho} alt="" /></div>
            <div className='texto'>
                <h2>Calcule la hipoteca de sus clietes o el mejor perfil para pisos de alquiler</h2>
                <p>Somos intermediarios financieros inmoviliarios</p> 
                <p> especializados en el mundo hipotecario y en pisos de alquier</p>
                <button className='button'><img src={flechaboton} alt="" /><span>Calcular Hipotecas</span></button>
            </div>
            <div><img src={ChicaEnFlores} alt="" /></div>
            <div><img src={botonIzquierdo} alt="" /></div>

        </div>
        <div className='dos'></div>
      </section>
    </div>
  );
};

export default Home;