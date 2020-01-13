import React, { Component } from "react";
import "./resources/contact.css";
import image from "./resources/profile.png";
export class AboutMe extends Component {
  render() {
    return (
      <div className="contact_main">
        <div className="cell">
          <h1>Atikur Zaman Pallob</h1>
          <img src={image} alt="profile" />
          <div className="contact_link">
            <a
              href="https://www.facebook.com/mdatikurzamaan.pallob"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-square" aria-hidden="true" />
            </a>
            <a
              href=" https://join.skype.com/invite/CaobQZOQdWGV"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-skype" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="cell">
          <h1>Details</h1>
          <hr />
          <div className="details">

          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
