import React from 'react';
import SignInFormCard from './signinformcard';
import Navbar from '../components/Navbar';

const SignIn = () => {

  return (
    <div
    >
      <Navbar />
    <center>
      <div className='App'>
        
        <SignInFormCard 
        title='Sign In'
        imageUrl='https://tse3.mm.bing.net/th?id=OIP.W3_kd2LygGadjofAiQLBfAHaEK&pid=Api&P=0&w=373&h=210'
        body="Fill out the form below to sign in."
        />
      </div>
    </center>

    </div>
  );
};

export default SignIn;
