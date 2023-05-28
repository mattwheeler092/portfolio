import React from "react";
import "./About.css"

import homeConfig from "../../assets/configs/homeConfig";

const About = (props) => {
    const about = props.about.start
    const aboutExit = props.about.exit

    return (
        <section id="about" style={{'max-width': '1100px', 'margin': 'auto'}}>
            <div className="about-card" style={{backgroundColor: "#263238"}}>
                <div className="card-header">
                    <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                    />
                </div>
                <div class="custom-div">
                    <div class="image-column">
                        <img src={homeConfig.profile_url} className={"center-img"} alt="Image"/>
                    </div>
                    <div class="text-column">
                        <div class="about-header">About</div>
                        <div class="about-contents">{about}<br/><br/>{aboutExit}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;