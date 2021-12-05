import React from "react";
import loginPic from "../images/login1.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content"></div>
          <div className="signin-image">
            <figure>
              <img src={loginPic} alt="login pic" />
            </figure>
            <NavLink to="/signup" className="signup-image-link">
              create an account
            </NavLink>
          </div>
          <div className="signin-form"></div>
          <h2 className="form-title">Sign up</h2>
          <form className="register-form" id="register-form">
            

            <div className="form=group">
              <label htmlFor="email">
                <i classNameS="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="email"
              />
            </div>

            

            

            <div className="form=group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="your password"
              />
            </div>

            

            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                value="Log In"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
