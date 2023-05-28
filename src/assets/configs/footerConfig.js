import React from "react";

import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub, BsFillChatSquareTextFill } from "react-icons/bs"
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "mailto:mattwheeler092@googlemail.com",
            className: "social-icon",
            target: "_blank",
            icon: <FaEnvelope size={30}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/mattwheeler092/",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillLinkedin size={30}/>
        },
        {
            id: "footer-2",
            url: "https://github.com/mattwheeler092",
            className: "social-icon",
            target: "_blank",
            icon: <BsGithub size={30}/>
        },
        
        {
            id: "footer-3",
            url: "https://drive.google.com/file/d/1-5qrR60hdRhUubcsEr3-szsRk1xXkURD/view?usp=sharing",
            className: "social-icon",
            target: "_blank",
            icon: <FaFilePdf size={30}/>
        },
        {
            id: "footer-4",
            url: "",
            className: "social-icon",
            // target: "_blank",
            icon: <BsFillChatSquareTextFill size={30}/>
        }
    ]
}

export default footerConfig
