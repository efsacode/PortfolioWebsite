import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className='section__title'>Get In Touch!</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className='contact__title'>Contact Me!
                    </h3>
                    <p className='contact__details'>Send me an email.
                    </p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                           
                            <input type="text" className="contact__form-input" placeholder='Your Name'/>

                        </div>

                        <div className="contact__form-div">
                           
                            <input type="email" className="contact__form-input" placeholder='Your Email'/>

                        </div>

                        <div className="contact__form-div">
                           
                            <input type="text" className="contact__form-input" placeholder='What is subject?'/>

                        </div>

                        <div className="contact__form-div contact__form-area">
                           
                            <textarea name="" id="" cols="30" rows="10" className="contact__form-input" 
                            placeholder='Write your message here...'></textarea>

                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </div>
                </form>
                    
            </div>


        </section>
    )
}
export default Contact