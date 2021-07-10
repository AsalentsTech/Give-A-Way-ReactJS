import React from 'react';
import SignUpFormCard from './signupformcard';
import Navbar from '../components/Navbar';

const SignUp = () => {

  return (

    <div
    
    >
       <Navbar />
    <center>
      <div className='App'>
        
        <SignUpFormCard 
        title='Sign Up'
        imageUrl='https://tse1.mm.bing.net/th?id=OIP.n_tTqHqMPT5byzKnjX97DAHaE6&pid=Api&P=0&w=252&h=168'
        body="Fill out the form below to create an account."
        />
      </div>
    </center>

    </div>
  );
};

export default SignUp;
