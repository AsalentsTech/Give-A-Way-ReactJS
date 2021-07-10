import React from 'react';
import './css/giveawaycard.css';
import { useHistory } from 'react-router-dom';

function GiveAWayCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToEnterGiveAWayPage = () => {
            history.push('/give-a-ways');
          }

    return (
        <div className="card-container2">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="underline2 md-auto"></div>
            <div className="card-title">
                <h3>4k flying drone</h3>
            </div>
            <div className="image-container2">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="card-btn">
            <button 
              className='glow-on-hover'
              onClick={goToEnterGiveAWayPage}
        >
          <center><font color="gold">Enter Give A Way</font></center>
        </button>
            </div>
            </div>
    )
}

export default GiveAWayCard