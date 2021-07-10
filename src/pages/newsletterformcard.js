import React from 'react';
import './css/newsletterform.css';

const NewsLetterFormCard = () => {

    return (
        <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '100px',
      marginTop: '610px',
      }}
    >
        
            <div className="card-container5">
            <div className="card-title">
                <h3><font color="white">Subscribe To Our Newsletter</font></h3>
            </div>
            <div className="underline5 md-auto"></div>
            <form>
            <label className="newsletter-form-labels">Email</label><br />
            <input 
             className="newsletter-form-inputs"
             type="email"
             placeholder="Your email here"
             autoComplete="email"
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

export default NewsLetterFormCard
