import React, { Component } from "react";
import "./resources/contact.css";
import image from "./resources/profile.png";
export class AboutMe extends Component {
  render() {
    return (
      <div className="contact_main">
        <div className="cell">
          <h4>Atikur Zaman Pallob</h4>
          <img src={image} alt="profile" />
          <div className="contact_link">
            <a
              href="https://www.facebook.com/mdatikurzamaan.pallob"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-square" aria-hidden="true" style={{ color: "steelblue" }} />
            </a>
            <a
              href=" https://join.skype.com/invite/CaobQZOQdWGV"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-skype" aria-hidden="true" style={{ color: "aqua" }} />
            </a>
          </div>
          <div className="email">
            <p>Email: atikurzamanpallob@gmail.com</p>
            <p>Phone: 01521504116 ,01745914445</p>
          </div>
        </div>
        <div className="cell">
          <h4>Personal Info</h4>
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
                <td>Date of Birth:</td>
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
