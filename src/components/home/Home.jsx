import React from 'react';
import "./home.css";
import Me from "../../assets/Me.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro"> 
              <img src={Me} alt="" className='home__img'/>
              <h1 className="home__name">Efsa Dilşat Algül</h1>
              <span className="home__education">Computer Engineer, Software Devoloper, Designer</span>
              <HeaderSocials/>   
            
              <a href="#contact" className="btn">Contact Me!</a>
             
              <ScrollDown/>
            
            </div>

            <Shapes/>

        </section>
    )
}       
export default Home