import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";


import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub, BsFillChatSquareTextFill } from "react-icons/bs"
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'
import { FaAngleDown } from "react-icons/fa"


import "./Home.css"

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row>
                    <Col className="home-header">
                        <div>
                            {homeConfig.greeting}
                        </div>
                        <div class="header-icons">
                            <a title="Send email" href="mailto:mattwheeler092@googlemail.com" target="_blank" class="circle-link">
                                <FaEnvelope class="link-icon"/>
                            </a>
                            <a title="LinkedIn" href="https://www.linkedin.com/in/mattwheeler092/" target="_blank" class="circle-link">
                                <AiFillLinkedin class="link-icon"/>
                            </a>
                            <a title="Github" href="https://github.com/mattwheeler092" target="_blank" class="circle-link">
                                <BsGithub class="link-icon"/>
                            </a>
                            <a title="Resume" href="https://drive.google.com/file/d/1-5qrR60hdRhUubcsEr3-szsRk1xXkURD/view?usp=sharing" target="_blank" class="circle-link">
                                <FaFilePdf class="link-icon"/>
                            </a>
                            <a title="Blog" href="" target="_blank" class="circle-link">
                                <BsFillChatSquareTextFill class="link-icon"/>
                            </a>
                        </div>
                        <div style={{textAlign: "center", paddingTop: "30px", paddingBottom: "30px"}}>
                            <DynamicTyping titles={homeConfig.titles}/>
                        </div>
                        <img src="https://i.ibb.co/zXG1ppG/profile.jpg" alt="Image description" class="center-img"/>
                        <div class="down-arrow-container">
                            <a href="#about">
                            <FaAngleDown class="down-arrow"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <About about={homeConfig.about} id="about"/>
                <Container fluid className="resume-content" id="resume">
                    <div className="col-md-8 mx-auto">
                        <Timeline items={homeConfig.workTimeline}/>
                    </div>
                </Container>
            </div>
        </section>)

}

export default Home