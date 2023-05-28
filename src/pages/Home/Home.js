import React from 'react'
import {Container} from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";
import Footer from '../../components/Footer/Footer';

import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub, BsFillChatSquareTextFill } from "react-icons/bs"
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'
import { HiChevronDown } from "react-icons/hi"

import "./Home.css"

const Home = () => {
    const icon_size = 25
    return (
        <section>
            <div class="home-content">
                <div class="home-header">
                    {homeConfig.greeting}
                </div>
                <div class="dynamic-typing">
                    <DynamicTyping titles={homeConfig.titles}/>
                </div>
                <div class="header-icons">
                    <a title="Send email" href="mailto:mattwheeler092@googlemail.com" target="_blank" class="circle-link">
                        <FaEnvelope size={icon_size} class="link-icon"/>
                    </a>
                    <a title="LinkedIn" href="https://www.linkedin.com/in/mattwheeler092/" target="_blank" class="circle-link">
                        <AiFillLinkedin size={icon_size} class="link-icon"/>
                    </a>
                    <a title="Github" href="https://github.com/mattwheeler092" target="_blank" class="circle-link">
                        <BsGithub size={icon_size} class="link-icon"/>
                    </a>
                    <a title="Resume" href="https://drive.google.com/file/d/1-BncbFlnHyL9fRq0XxFJRmHUwvxuOX-n/view?usp=sharing" target="_blank" class="circle-link">
                        <FaFilePdf size={icon_size} class="link-icon"/>
                    </a>
                    <a title="Blog" href="" class="circle-link">
                        <BsFillChatSquareTextFill size={icon_size} class="link-icon"/>
                    </a>
                </div>
                <div class="down-arrow-container">
                    <i class="bobbing-icon">
                        <a href="#scoll-to">
                            <HiChevronDown class="down-arrow"/>
                        </a>
                    </i>
                </div>
            </div>
            <div class="remaining-content">
                <div id="scoll-to" class="scroll-to"/>
                <About about={homeConfig.about} id="about"/>
                <Container fluid className="resume-content" id="resume">
                    <div className="col-md-8 mx-auto">
                        <Timeline items={homeConfig.workTimeline}/>
                    </div>
                </Container>
            </div>
            <Footer/>
        </section>)
}

export default Home
