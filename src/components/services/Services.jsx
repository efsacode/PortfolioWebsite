import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import Image4 from "../../assets/arduino.svg";
import Image5 from "../../assets/csharp.svg";
const data = [  
    {
        id: 1,
        image: Image1,
        title: "Web Developing & Designing",
        desc: "I started to Web Developing with Django framework of Python Programming Language. I have also knowledge of HTML, CSS, JavaScript, ReactJS.",
    },
    {
        id: 2,
        image: Image2,
        title: "UX/UI Design",
        desc: "I have knowledge of UX/UI Designing. I have also knowledge of Figma, Canva, Adobe Photoshop.",
    },

    {
        id: 3,
        image: Image3,
        title: "Drawing & Painting",
        desc: "I have knowledge of Drawing & Painting. I mostly use Procreate for my digital drawings. You can visit my drawing page!",
    },  

    {
        id: 4,
        image: Image4,
        title: "Arduino Programming",
        desc:  "I have knowledge of Arduino Programming. I have also knowledge of Arduino IDE, C Programming Language, LTSpice. I made some projects in my internship with Arduino.",
    },

    {
        id: 5,
        image: Image5,
        title: "C,C++,C# Programming",
        desc: "I have knowledge of C,C++,C# Programming LanguageS. I have also knowledge of Visual Studio and Visual Studio Code. I made some school projects with C#.",
    },

];


    
const Services = () => {
    return <section className="services container section" id= "services">
        <h1 className="section__title">Studies</h1>

        <div className="services__container grid">
            {data.map(({id,image,title,desc}) => {
                return(
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img"/>
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{desc}</p>

                    </div>
                )

            })}   
        </div>
    </section>
        
    
}
export default Services