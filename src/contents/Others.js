import React, { Component } from "react";
import certificate from "./resources/certificate.png";
import "./resources/others.css";
export class Others extends Component {
  cert() {
    return (
      <div className="GRID">
        <div className="CELL">
          <img src={certificate} alt="certificate" />
        </div>
        <div className="CELL">
          <table>
            <tr>
              <td>Course Name:</td>
              <td>Machine Learning</td>
            </tr>
            <tr>
              <td>Completion Date:</td>
              <td>21/08/2018</td>
            </tr>
            <tr>
              <td>Provider:</td>
              <td>Coursera:</td>
            </tr>
            <tr>
              <td>Certificate Link</td>
              <td>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/YKX8VTBS4WLH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="others">
        {this.cert()}
      </div>
    );
  }
}

export default Others;
