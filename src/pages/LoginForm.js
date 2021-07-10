import React from 'react';
import './signin'

const LoginForm = () => {

    return (
        <form>
            <div>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" autoComplete="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" autoComplete="password" />
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
