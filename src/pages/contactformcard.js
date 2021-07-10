import React from 'react';
import './css/contactform.css';
import Navbar from '../components/Navbar';

function ContactFormCard({title, imageUrl, body}) {

    return (
        <div
    
    >
        <Navbar />
        
        <div className="card-container4">
            <div className="image-container4">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline4 md-auto"></div>
            <h3><font color="white">{body}</font></h3>
            <br />
            <form>
            <label className="contact-form-labels">Name</label><br />
            <input 
            className="contact-form-inputs"
            type="text"
            placeholder="Your name here"
            autoComplete="name"
            />
            <br />
            <label className="contact-form-labels">Email</label><br />
            <input 
            className="contact-form-inputs"
            type="text"
            placeholder="Your email here"
            autoComplete="email"
            />
            <br />
            <label className="contact-form-labels">Message</label><br />
            <input 
            className="contact-form-inputs"
            type="text"
            placeholder="Your message here"
            autoComplete="message"
            />
            <br />
            <div className="card-btn">
            <button 
        className="glow-on-hover" 
        >
            <font color="gold">
                Submit
            </font>
        </button>
            </div>
            </form>
            </div>
            </div>
    )
}

export default ContactFormCard
