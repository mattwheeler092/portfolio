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
                    <div class="complementary-skill-h1">
                        <span class="complementary-skills"><strong>Programming</strong></span>
                    </div>
                    <AttentionSeeker effect={"pulse"}>
                        <div class="complementary-skills">
                            <SkillsItems config={skillsConfig.programmingSkills}/>
                        </div>
                    </AttentionSeeker>

                    <div class="complementary-skill-h1">
                        <span class="complementary-skills"><strong>Developer Tools</strong></span>
                    </div>
                    <AttentionSeeker effect={"pulse"}>
                        <div class="complementary-skills">
                            <SkillsItems config={skillsConfig.devToolSkills}/>
                        </div>
                    </AttentionSeeker>

                    <div class="complementary-skill-h1">
                        <span class="complementary-skills"><strong>Machine Learning</strong></span>
                    </div>
                    <AttentionSeeker effect={"pulse"}>
                        <div class="complementary-skills">
                            <SkillsItems config={skillsConfig.machineLearningSkills}/>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </section>
    )

}
export default Skills