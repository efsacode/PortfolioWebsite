import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.jpeg";
import cv from "../../assets/cv.pdf";

const About = () => {
    return (
        <section className="about container section" id='about'>
            
        <div className="about__container grid">
            <div className="img_cover">
                <img src={Image} alt="" className="about__img"/>
            </div>
            <div className="about__data grid">
                
                <div className="about__info">
                    <h2 className="section__title-about">About Me</h2>
                    <p className="about__description">I am Efsa Dilşat Algül from Ankara, Turkey. I am currently pursuing my studies in Computer Engineering at Ostim Technical University. I'm pursuing a minor in Software Engineering. 
                    I am gaining comprehensive knowledge and practical skills in various aspects of the field. I have always been fascinated by technology and its limitless potential to shape the future. I am excited to apply my knowledge and contribute to innovative projects that can make a positive impact on technology.</p>
                    <div className="btn_cover">
                        
                        <a href={cv} download="Efsa Dilşat Algül.pdf" target="_blank" class="btn">Download CV</a>
                    </div>
                
                </div>
           
               
            
            </div>
            
       
       
        </div>
        <div className="about__container2 grid">
             <div class="ds-skills-section">
                    
                        
                    <h2 class="ds-heading">Core Skills</h2>
                    <ul class="ds-skills-list">
                    <li>HTML-CSS-Javascript</li>
                    <li>React</li>
                    <li>Python,Django</li>
                    <li>C-C++</li>
                    <li>C#</li>
                    <li>MySQL, SQL</li>
                    </ul>
            </div>

            <div className="about__data grid">
                <div class="ds-skills-section">
                <h2 class="ds-heading">Other Skills</h2>
                    <ul class="ds-skills-list">
                    <li>Git-Github</li>
                    <li>Canva-Figma</li>
                    <li>Procreate</li>
                    <li>Abode Photoshop CC</li>
                    <li>Microsoft Office</li>
                    <li>Linux</li>
                    </ul>
                
               
        </div>
                
                <div className="about__info">
                    
                    
                </div>
           
               
            
            </div>
            
       
       
        </div>
       
         
        </section>
    )
}
export default About