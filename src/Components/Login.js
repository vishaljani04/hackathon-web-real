import React from "react";
import './Main.css'

function Login()
{
    return(
        <div>
            <div className="login-form-container">
        <i className="fas fa-times" id="form-close" />
        <form action="/login" method="post">
          <h3>login</h3>
          <input type="email" name="id" className="box" placeholder="enter your email" />
          <input type="password" name="pass" className="box" placeholder="enter your password" />
          <input type="submit" defaultValue="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
          <p>forget password? <a href="#">click here</a></p>
          <p>don't have and account? <a href="#">register now</a></p>
        </form>
      </div>
        </div>
    );
}
export default Login;