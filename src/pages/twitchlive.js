import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import './css/youtube.css';
import Navbar from '../components/Navbar';

const TwitchLive = () => {

  const TwitchUsername = process.env.REACT_APP_TWITCH_USERNAME

  return (
    <div
      style={{
        backgroundColor: '#fff',
        height: '90vh'
      }}
    >
      <Navbar />
<center>
<div className="title">
 <h2>Asalentsvpns Twitch Live Stream !</h2>
</div>
    <ReactTwitchEmbedVideo height="750px" width="99%" channel={TwitchUsername} />
    <br></br>
    <br></br>
    </center>
    </div>
  );
};

export default TwitchLive;
