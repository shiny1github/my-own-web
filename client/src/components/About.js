import React from "react";
import mypic from "../images/myweb.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-2">
              <img src={mypic} alt="mypic" />
            </div>

            <div className="col-md-7">
              <div className="profile-head">
                <h4>Shivani Suman</h4>
                <h6>Web Developer</h6>
                <br></br>
                <p>
                  “A successful website does three things: <br></br> It attracts the right
                  kinds of visitors. <br></br>Guides them to the main services or product
                  you offer. <br></br>Collect Contact details for future ongoing
                  relation.”
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="profile-edit-btn"
                value="Edit Profile"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
