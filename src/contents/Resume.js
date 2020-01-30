import React, { Component } from 'react'
import "./resources/resume.css";
import Pencil from "./resources/pencil.png";
import Cap from "./resources/cap.png";
export class Resume extends Component {

    education(syear, endyear, university, sub, degree) {

        return (
            <div className="educationgrid">
                <div className="uni">{university}</div>
                <div className="sub">{sub}</div>
                <div className="dura">{syear}-{endyear}</div>
                <div className="deg">{degree}({endyear})</div>

            </div>
        )

    }

    skills() {
        return (
            <div className="skillgrid">
                <div className="det">Database: Mysql, SQLite, Realm</div>
                <div className="det">Languages: Java, Javasrcipt, C, C++ </div>
                <div className="det">Tools: Code Blocks, Eclipse, Octave, PyCharm, Xampp, VS Code, Postman, Android Studio </div>
                <div className="det">OS : Linux, Windows, Android</div>
                <div className="det">Android Related: Picasso, Retrofit 2, JSON Parsing, Butter Knife, MVC Design Pattern, MVP Design
Pattern, Representational State Transfer (REST) API, Broadcast Receiver, Asynchronous,
Synchronous Task Handling, Foreground-Background Services, Working with Internal & External
Storage ,Constraint Layout, Multi-Threading, OOP Concept ,Geo Location API.</div>

                <div className="det">Javasrcipt Related: ES7</div>
            </div>
        )
    }

    render() {
        return (
            <div className="View">
                <div className="subview1">
                    <img src={Cap} alt="cap" />
                    <img src={Pencil} alt="pencil" />
                </div>
                <div className="subview2">
                    <div className="he">Education</div>
                    {this.education("2013", "2017", "Rajshahi University of Engineering & Technology", "Computer Scince & Engineering", "B.Sc")}
                    {this.education("2010", "2012", "Palashbari Government College", "Science", "H.S.C")}
                    {this.education("2005", "2010", "Palashbari SM Pilot High School", "Science", "S.S.C")}
                    <div className="he">Skills</div>
                    {this.skills()}
                </div>
            </div>
        )
    }
}

export default Resume
