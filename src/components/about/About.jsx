import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
    return (
        <section className="about container section" id='about'>
            
        <div className="about__container grid">
            <img src={Image} alt="" className="about__img"/>
            <div className="about__data grid">
                
                <div className="about__info">
                    <h2 className="section__title-about">About Me</h2>
                    <p className="about__description">I am Efsa Dilşat Algül from Ankara, Turkey. I am currently pursuing my studies in Computer Engineering at Ostim Technical University, where I am gaining comprehensive knowledge and practical skills in various aspects of the field. I have always been fascinated by technology and its limitless potential to shape the future. Being a part of the vibrant academic community at Ostim Technical University allows me to explore my passion for computer engineering while collaborating with like-minded individuals and staying updated with the latest advancements in the industry. I am excited to apply my knowledge and contribute to innovative projects that can make a positive impact on society.</p>
                    <div className="btn_cover">
                        <a href="" className="btn">Download CV</a>
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