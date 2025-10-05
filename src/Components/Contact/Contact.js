import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:payalraghav0110@gmail.com">
          payalraghav0110@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/payal-raghav-3b115b287/">
          User Name: payal
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/payalraghav1">
          payal
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+ 9650778124">
         +91 9650778124
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
