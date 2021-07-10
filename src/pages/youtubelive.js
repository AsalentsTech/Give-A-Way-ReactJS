import React from 'react';
import './css/youtube.css';
import Navbar from '../components/Navbar';

const TwitchLive = () => {

  const YoutubeChannelID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID

  const YoutubeUrl = `https://www.youtube.com/embed/live_stream?channel=${YoutubeChannelID}`

  return (
    <div
      style={{
        backgroundColor: '#fff',
        height: '90vh'
      }}
    >
      <Navbar />
<center>
<br></br>
<div className="title">
 <h2>Asalentsvpns Youtube Live Stream !</h2>
</div>
    <br></br>
    <iframe title="Asalentsvpns Youtube Live" width="99%" height="650px" src={YoutubeUrl}></iframe>
    <br></br>
    <br></br>
    <div className="title">
 <h2>Make sure to like, subscribe, and tune in whenever i go live to keep up on all give a way information and more :)</h2>
</div>
    </center>
    </div>
  );
};

export default TwitchLive;
