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
        image: Image2,
        title: "Web Developing & Designing",
        desc: "I started to Web Developing with HTML, CSS, JavaScript, ReactJS. I have also knowledge of Django framework of Python Programming Language and a little bit of .Net framework.",
    },

    {
        id: 2,
        image: Image2,
        title: "UX/UI Design",
        desc: "I have knowledge of UX/UI Designing. I have also knowledge of Figma, Canva.",
    },

    
    {
        id: 3,
        image: Image2,
        title: "Arduino Programming",
        desc:  "I have knowledge of Arduino Programming. I have also knowledge of Arduino IDE, C Programming Language. I made some projects in my internship education with Arduino.",
    },

    {
        id: 4,
        image: Image2,
        title: "C, C++, C# Programming",
        desc: "I have knowledge of C,C++,C# Programming Languages. I have also knowledge of Visual Studio, Visual Studio Code, İntelliJ, DevC and Eclipse . I made some school projects with C# in my second year.",
    },
    {
        id: 5,
        image: Image2,
        title: "Python Programming",
        desc: "I have knowledge of Python Programming. I attended some bootcamps about Deep Learning and Data Science. I'm still learning about Data Science like NumPy, Pandas, Matplotlib and other libraries.",
    },  
    {
        id: 6,
        image: Image1,
        title: "Drawing & Painting",
        desc: "I have passion about Drawing & Painting. I mostly use Procreate for my digital drawings. You can visit my drawing page!",
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