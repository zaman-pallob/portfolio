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
          <div className="com">
            <p>Email : atikurzamanpallob@gmail.com </p>
            <p>Phone 1: +8801745914445</p>
            <p>Phone 2: +8801521504116</p>
          </div>
        </div>
        <div className="cell">
          <h1>Details</h1>
          <hr />
          <div className="details">
            <table>
              <tr>
                <td>Full Name :</td>
                <td>Md Atikur Zaman Pallob</td>
              </tr>
              <tr>
                <td>Fathers Name :</td>
                <td>Md Ashaduzzman Momtaz</td>
              </tr>
              <tr>
                <td>Mothers Name :</td>
                <td>Mst Bilkis Akter Baby</td>
              </tr>
              <tr>
                <td>Permanent Address:</td>
                <td>Jamalpur,Palashbari ,Gaibandha</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>31/12/1994</td>
              </tr>
              <tr>
                <td>Hobby :</td>
                <td>Playing Video Games</td>
              </tr>
              <tr>
                <td>Height :</td>
                <td>5 feet 2 inch</td>
              </tr>
              <tr>
                <td>Maritial Status :</td>
                <td>Married</td>
              </tr>
              <tr>
                <td>Religion:</td>
                <td>Islam</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>Bangladeshi</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
