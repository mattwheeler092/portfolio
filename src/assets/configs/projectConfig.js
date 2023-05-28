import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import travoIcon from "../images/travo-recommender-icon.png"
import scraperIcon from "../images/tripadvisor-scraper-icon.png"
import portfolio from "../images/portfolio-icon.png"
import solarSavingsIcon from "../images/solar-savings-icon.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Travel Recommender (w/ OpenAI & Pinecone)",
        links: [
            {
                name: "repo",
                url: "https://github.com/mattwheeler092/travo-ai-recommendation-engine",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/mattwheeler092/travo-ai-recommendation-engine/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/mattwheeler092/travo-ai-recommendation-engine/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: travoIcon,
        description: "Recommendation engine to create personalised travel itineraries from user text prompts.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "TripAdvisor Event Web Scraper",
        links: [
            {
                name: "repo",
                url: "https://github.com/mattwheeler092/tripadvisor-scraper",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/mattwheeler092/tripadvisor-scraper/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/mattwheeler092/tripadvisor-scraper/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: scraperIcon,
        description: "Automated web scraping and processing of 120,000 TripAdvisor events across 130 cities.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Solar Power Energy Savings Estimator",
        links: [
            {
                name: "repo",
                url: "https://github.com/mattwheeler092/solar-power-output-prediction",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/mattwheeler092/solar-power-output-prediction/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/mattwheeler092/solar-power-output-prediction/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: solarSavingsIcon,
        description: "React.js web app to predict solar power energy savings across California.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Portfolio Website",
        links: [
            {
                name: "repo",
                url: "https://github.com/mattwheeler092/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/mattwheeler092/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/mattwheeler092/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio ,
        description: "Adapted template react.js app to create personalised portfolio website.",
        target: "_blank"
    }
]

export default projectConfig