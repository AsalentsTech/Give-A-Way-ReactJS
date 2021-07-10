import React from 'react';
import './css/sign-up.css';
import { useHistory } from 'react-router-dom';

function SignInFormCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToSignUpPage = () => {
            history.push('/sign-up');
          }

          const LoginUser = () => {
            history.push('/Dashboard/home');
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
        <div className="card-container7">
            <div className="image-container7">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="white">{title}</font></h3>
            </div>
            <div className="underline7 md-auto"></div>
            <h3><font color="white">{body}</font></h3>
            <br />
            <form>
            <p><font color="blue"></font></p><br />
            <label className="sign-in-form-labels">Username</label><br />
            <input 
            className="sign-in-form-inputs"
            type="text"
            placeholder="Your username here"
            autoComplete="username"
            />
            <br />
            <label className="sign-in-form-labels">Password</label><br />
            <input 
            className="sign-in-form-inputs"
            type="password"
            placeholder="Your password here"
            autoComplete="password"
            />
            <br />
            <div className="card-btn">
            <button 
            className="glow-on-hover" 
            onClick={LoginUser}
            >
                <font color="gold">
                    Sign In
                </font>
            </button>
            </div>
            </form>
            <div className="card-btn">
            <button 
              className='glow-on-hover'
              onClick={goToSignUpPage}
        >
          <font color="gold">Go To Sign Up</font>
        </button>
            </div>
            </div>
            </div>
    )
}

export default SignInFormCard
