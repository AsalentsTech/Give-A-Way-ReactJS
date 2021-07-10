import React, { useState,useEffect } from 'react';
import Clock from '../components/Clock'
import GiveAWayCard from './giveawaycard'
import './css/giveawaycard.css';
import Navbar from '../components/Navbar';
import NewsLetter from './newsletterform';

const Home = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("July 21,2021").getTime();

    interval=setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance % (60 * 1000) / (1000));

      if(distance<0) {
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  })

  return (
    <div
    >

<Navbar />

    <div>
    <br></br>
    <center><h1><font color="black">Give A Way Ends In</font></h1></center>
            <br></br>
      <center><Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} /></center>
    </div>
    <center>
        <div className='App'>
      <GiveAWayCard 
        title='Give A Way Item'
        imageUrl='https://www.jouetprive.com/media/catalog/product/cache/1/image/800x/602f0fa2c1f0d1ba5e241f914e856ff9/d/r/drone-rc-black-fly-2-4ghz-avec-camera-wifi_03.jpg'
        body="Flying Drone With 4K Camera, this camera has a follow user feature and can record without you controlling it and will follow you as you move freely!"/>
    </div>
    </center>
      <NewsLetter />
    </div>
  );
};

export default Home;
