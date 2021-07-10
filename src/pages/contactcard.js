import React from 'react';
import './css/contactcard.css';
import SocialFollow from '../components/socialfollowbuttons';
import { useHistory } from 'react-router-dom';

function ContactCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToContactFormPage = () => {
            history.push('/contact-form');
          }

    return (
        <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
      }}
    >
        <div className="card-container3">
            <div className="image-container3">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline3 md-auto"></div>
            <h3><font color="white">{body}</font></h3>
            <br />
            <SocialFollow />
            <br />
            <div className="card-btn">
            <button 
              className='glow-on-hover'
              onClick={goToContactFormPage}
        >
          <center><font color="gold">View Contact Form</font></center>
        </button>
            </div>
            </div>
            </div>
    )
}

export default ContactCard