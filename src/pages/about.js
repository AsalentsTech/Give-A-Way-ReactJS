import React from 'react';
import AboutCard from './aboutcard';
import Navbar from '../components/Navbar';

const About = () => {
  return (

    <div
    
    >
  <Navbar />
      <center>
        <div className='App'>
        <AboutCard 
        title='About Us'
        imageUrl='https://kraftpowercon.us/wp-content/uploads/2018/01/mission.jpg'
        body="Here at AsalentsTech we strive to provide the best services to all our customers for all products and services we offer. Even when it comes to our give a ways, free services and products we make sure to provide the best possible user experience no matter how much time or money it cost because customer satisfaction is our #1 goal. When you vsit our website we give one gaurentee and that is anytime you visit our site for any reason you can bet your bottom dollar that you will enjoy your stay and will want to continue to be apart of our helpful and encouraging community. So remember to enjoy yourself, chill and relax and if you have any questions, comments, or concerns feel free to contacts us via the contact form or through any of our social media."
        />
        </div>
    </center>
    </div>
  );
};

export default About;
