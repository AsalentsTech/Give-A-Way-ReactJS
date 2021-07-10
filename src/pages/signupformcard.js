import React from 'react';
import './css/sign-in.css';
import { useHistory } from 'react-router-dom';

function SignUpFormCard({title, imageUrl, body}) {

    const history = useHistory();

        const goBackToSignInPage = () => {
            history.push('/sign-in');
          }

    return (
        <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '87vh'
      }}
    >
        
        <div className="card-container8">
            <div className="image-container8">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline8 md-auto"></div>
            <h3><font color="white">{body}</font></h3>
            <br />
            <form>
            <label className="sign-up-form-labels">Username</label><br />
            <input 
            className="sign-up-form-inputs"
            type="text"
            placeholder="Your username here"
            autoComplete="username"
            />
            <br />
            <label className="sign-up-form-labels">Email</label><br />
            <input 
            className="sign-up-form-inputs"
            type="email"
            placeholder="Your email here"
            autoComplete="email"
            />
            <br />
            <label className="sign-up-form-labels">Password</label><br />
            <input 
            className="sign-up-form-inputs"
            type="password"
            placeholder="Your password here"
            autoComplete="password"
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
            <div className="card-btn">
            <button 
              className='glow-on-hover'
              onClick={goBackToSignInPage}
        >
          <center><font color="gold">Go Back To Sign In</font></center>
        </button>
            </div>
            </div>
            </div>
    )
}

export default SignUpFormCard
