import React, { Component } from 'react'
import "./resources/project.css";
import image from "./resources/android.png";
import logo from "./resources/html.jpeg";
import rec from "./resources/react.png";

export class Projects extends Component {

    android(projectname, gitlink, downloadlink) {
        return (
            <div className="project">
                <p>{projectname}</p>
                <img src={image} alt="android" />
                <div className="links">
                    <a href={gitlink} rel="noopener noreferrer" target="_blank">
                        Github
              </a>
                    <a href={downloadlink} rel="noopener noreferrer" target="_blank">
                        Download
              </a>
                </div>
            </div>
        );
    }

    html(projectname, gitlink, link) {
        return (
            <div className="project">
                <p>{projectname}</p>
                <img src={logo} alt="android" />
                <div className="links">
                    <a href={gitlink} rel="noopener noreferrer" target="_blank">
                        Github
              </a>
                    <a href={link} rel="noopener noreferrer" target="_blank">
                        Live Link
              </a>
                </div>
            </div>
        );
    }

    react(projectname, gitlink, link) {
        return (
            <div className="project">
                <p>{projectname}</p>
                <img src={rec} alt="android" />
                <div className="links">
                    <a href={gitlink} rel="noopener noreferrer" target="_blank">
                        Github
              </a>
                    <a href={link} rel="noopener noreferrer" target="_blank">
                        Live Link
              </a>
                </div>
            </div>
        );
    }




    render() {
        let git = [
            "https://github.com/zaman-pallob/Notepad ",
            "https://github.com/zaman-pallob/Call-Blocker",
            "https://github.com/zaman-pallob/ResistorColorCode",
            "https://github.com/zaman-pallob/AutoCallRecorder",
            "https://github.com/zaman-pallob/ClassAttendance",
            "https://github.com/zaman-pallob/AppsLocker"
        ];
        let projectname = [
            "Notepad",
            "Call-Blocker",
            "ResistorColorCode",
            "Auto Call Recorder",
            "Class Attendance",
            "Apps Locker"
        ];
        let download = [
            "https://play.google.com/store/apps/details?id=pallob.loop.com.notepad",
            "https://play.google.com/store/apps/details?id=spark.loop.callblocker",
            "https://play.google.com/store/apps/details?id=com.loop.resistorcolorcode",
            "http://www.mediafire.com/file/774r1n82786ern4/AutoCallRecorder.apk",
            "https://github.com/zaman-pallob/ClassAttendance/raw/master/app/debug/app-debug.apk",
            "https://github.com/zaman-pallob/AppsLocker/raw/master/app/build/outputs/apk/debug/app-debug.apk"
        ];

        return (


            <div className="demo-tabs">
                <div className="med">Android</div>
                <div className="project_maingrid">
                    {this.android(projectname[0], git[0], download[0])}
                    {this.android(projectname[1], git[1], download[1])}
                    {this.android(projectname[2], git[2], download[2])}
                    {this.android(projectname[3], git[3], download[3])}
                    {this.android(projectname[4], git[4], download[4])}
                    {this.android(projectname[5], git[5], download[5])}

                </div>
                <hr style={{ width: "100%", borderTop: "lightblue solid 5px" }} />
                <div className="med">Html/CSS</div>
                <div className="project_maingrid">
                    {this.html(
                        "DropDownMenu",
                        "https://github.com/zaman-pallob/DropDownMenus",
                        "https://atikurzamanpallob.000webhostapp.com/dropdownmenu/index.html"
                    )}
                    {this.html(
                        "FlexBoxDemo",
                        "https://github.com/zaman-pallob/FlexboxDemo",
                        "http://atikurzamanpallob.000webhostapp.com/flexbox/index.html"
                    )}
                    {this.html(
                        "Parallax Demo",
                        "https://github.com/zaman-pallob/ParallaxDemo",
                        "https://atikurzamanpallob.000webhostapp.com/projectdemo/index.html"
                    )}
                </div>
                <hr style={{ width: "100%", borderTop: "lightblue solid 5px" }} />
                <div className="med">React</div>
                <div className="project_maingrid">
                    {this.react(
                        "Portfolio",
                        "https://github.com/zaman-pallob/portfolio",
                        ""
                    )}
                </div>
            </div>
        );
    }
}

export default Projects
