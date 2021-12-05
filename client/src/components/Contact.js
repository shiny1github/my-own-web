import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone data */}

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>

                  <div className="contact_info_text">+9178912345667</div>
                </div>
              </div>
              {/* email data */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png"
                  alt="email"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">email</div>

                  <div className="contact_info_text">shiny@gmail.com</div>
                </div>
              </div>
              {/* address data */}

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png"
                  alt="address"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>

                  <div className="contact_info_text">Mp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact-form */}
      <div className="contact_form">
        <div className="container">
        <div className="row">
        <div className="col-lg-10 offset-lg-1 ">
          <div className="contact_form_container py-5">
            <div className="contact_form_title">
              Get in touch
            </div>
            <form id="contact_form">
              <div className="contact_form_name d-flex justify-content-between  align-items-between">

              </div>

            </form>
          </div>

        </div>

        </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
