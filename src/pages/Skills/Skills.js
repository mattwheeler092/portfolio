import React from 'react'
import {AttentionSeeker} from "react-awesome-reveal";
import SkillsItems from "./SkillsItems";
import skillsConfig from "../../assets/configs/skillsConfig";
import "./Skills.css"


const Skills = () => {
    return (
        <section id="skills">
            <div>
                <div className="skills-div">
                    <h1 className="main-skills-h1">
                        <span className="main-skills"><strong>Skills & Tools</strong></span>
                    </h1>

                    <h1 className="complementary-skills-h1">
                        <span className="complementary-skills"><strong>Programming</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.mainSkills}/>
                        </div>
                    </AttentionSeeker>

                    <h1 className="complementary-skills-h1">
                        <span className="complementary-skills"><strong>Machine Learning</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.complementarySkills}/>
                        </div>
                    </AttentionSeeker>

                    <h1 className="complementary-skills-h1">
                        <span className="complementary-skills"><strong>Developer Tools</strong></span>
                    </h1>
                    <AttentionSeeker effect={"pulse"}>
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.complementarySkills}/>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </section>
    )

}
export default Skills