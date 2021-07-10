import React from 'react';
import EnterGiveAWayCard from './entergiveawaycard'
import Navbar from '../components/Navbar';

const GiveAWays = () => {
  return (
    <div
    >
      <Navbar />
      <center>
        <div className='App'>
      <EnterGiveAWayCard 
        title='Enter Give A Way'
        imageUrl='https://st3.depositphotos.com/6050492/12653/v/450/depositphotos_126532672-stock-illustration-enter-to-win-vector-sign.jpg'
        body="Fill out the form below to be entered into the give a way!"
        />
    </div>
    </center>
    </div>
  );
};

export default GiveAWays;
