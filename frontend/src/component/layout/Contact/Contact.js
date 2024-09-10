import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import mail from "../../../images/gmail.png"
import phone from "../../../images/phone.png"
const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:shashikumar2817@gmail.com">
        <img className="img-link" src={mail} />
      </a>
      <a className="mailBtn" href="tel:+917633827049">
      
        <img className="img-link" src={phone} />
        
      </a>
    </div>
  );
};

export default Contact;
