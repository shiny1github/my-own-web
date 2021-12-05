import React from "react";
import { NavLink } from "react-router-dom";
import signPic from "../images/signup.jpeg";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content"></div>
        <div className="signup-form"></div>
        <h2 className="form-title">Sign up</h2>
        <form className="register-form" id="register-form">
          <div className="form=group">
            <label htmlFor="name">
              <i className="zmdi zmdi-account material-icons-name"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="your name"
            />
          </div>

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
            <label htmlFor="phone">
              <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="phone"
            />
          </div>

          <div className="form=group">
            <label htmlFor="work">
              <i className="zmdi zmdi-slideshow material-icons-name"></i>
            </label>
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              placeholder="your profession"
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

          <div className="form=group">
            <label htmlFor="cpassword">
              <i className="zmdi zmdi-lock material-icons-name"></i>
            </label>
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              placeholder="confirm your password"
            />
          </div>

          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="Register"
            ></input>
          </div>
        </form>
      </div>

      <div className="signup-image">
        <figure>
          <img src={signPic} alt="registration pic" />
        </figure>
        <NavLink to="/login" className="signup-image-link">
          I am already registered
        </NavLink>
      </div>
    </section>
  );
};

export default Signup;
