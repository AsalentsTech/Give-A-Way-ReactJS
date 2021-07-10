import React from 'react';
import './css/entergiveawaycard.css';

function EnterGiveAWayCard({title, imageUrl, body}) {

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
            }}
        >
        
        <div className="card-container6">
            <div className="image-container6">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline6 md-auto"></div>
            <h3><font color="white">{body}</font></h3>
            <br />
            <form>
            <label className="entergiveawaycard-form-labels">Username</label><br />
            <input 
            className="entergiveawaycard-form-inputs"
            type="text"
            placeholder="Your username here"
            autoComplete="username"
            />
            <br />
            <label className="entergiveawaycard-form-labels">Email</label><br />
            <input 
            className="entergiveawaycard-form-inputs"
            type="text"
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

export default EnterGiveAWayCard
