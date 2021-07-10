import React from 'react'

const RegisterForm = () => {
    return (
        <form>
            <div>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="userName">UserName:</label>
                    <input type="text" name="userName" id="userName" autoComplete="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" autoComplete="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" autoComplete="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Password:</label>
                    <input type="confirmpassword" name="confirmpassword" id="confirmpassword" autoComplete="password_confirm" />
                </div>
            </div>
        </form>
    )
}

export default RegisterForm
