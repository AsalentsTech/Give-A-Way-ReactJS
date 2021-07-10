import React from 'react';
import './css/aboutcard.css';
import { useHistory } from 'react-router-dom';

function AboutCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToContactUsPage = () => {
            history.push('/contact-us');
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
        <div className="card-container1">
            <div className="image-container1">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline1 md-auto"></div>
            <div className="card-body">
                <p><font color="white">{body}</font></p>
            </div>
            <div className="card-btn">
            <button 
              className='glow-on-hover'
              onClick={goToContactUsPage}
        >
          <center><font color="gold">View Contact Info</font></center>
        </button>
            </div>
            </div>
            </div>
    )
}

export default AboutCard