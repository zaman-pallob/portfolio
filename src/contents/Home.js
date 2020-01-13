import React, { Component } from "react";
import "./resources/home.css";
import image from "./resources/avater.png";


export class Home extends Component {
  render() {
    return (
      <div className="maingrid">
        <div className="avater">
          <img src={image} alt="Pallob" />
        </div>
        <div className="information">
          <div className="title">
            Software Developer
          </div>
          <hr style={{ width: "100%", borderTop: "lightblue solid 5px" }} />
          <div className="code">

            <i class="fas fa-file-code" style={{ color: "black" }} /> C/C++|
                <i class="fab fa-java" style={{ color: "#f48024" }} /> Java|
                <i class="fas fa-database" style={{ color: "red" }} />  SQL|
                <i class="fab fa-js-square" style={{ color: "#f48024" }} /> Javascript|
                <i class="fab fa-react" style={{ color: "blue" }} /> React|
                <i class="fab fa-html5" style={{ color: "#FF5733 " }} /> Html|
                <i class="fab fa-css3" style={{ color: "steelblue" }} /> Css

         </div>
          <div className="social_link">
            <a href="http://github.com/zaman-pallob" rel="noopener noreferrer" target="_blank" >
              <i className="fab fa-github-square" style={{ color: "#AD5C51" }} aria-hidden="true" />
            </a>

            <a href="https://stackoverflow.com/users/9210947/pallob" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-stack-overflow" style={{ color: "#f48024" }} aria-hidden="true" />
            </a>

            <a href="https://www.linkedin.com/in/atikur-zaman-pallob-3b178b148" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin" aria-hidden="true" style={{ color: "#1293d2" }} />
            </a>
            <a
              href="https://www.hackerrank.com/atikur_zaman" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-hackerrank" style={{ color: "#00b200" }} aria-hidden="true" />
            </a>

          </div>
        </div>
      </div >
    );
  }
}

export default Home;
