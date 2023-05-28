import React from 'react'
import { IoMdSchool } from 'react-icons/io';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const homeConfig = {

    profile_url: "https://i.ibb.co/zXG1ppG/profile.jpg",

    greeting:
        <h1 className="heading">
            <strong className="main-name">Matt Wheeler</strong>
        </h1>,
    titles: [
        "Data Engineer",
        "Data Scientist",
        "Machine Learning Practitioner",
        "USF MSDS Cohort 11",
        "UoM Physics Graduate 2019",
        "Keen Mountaineer",
        "Scroll down for more information"
    ],
    about: {
        start: "I've been working for over six years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Data Engineer",
            company: "PG&E",
            description: "Led backend data infrastructure initiatives within the computer vision team, " +
                "overseeing end-to-end development of data pipelines, automation, and database data & schema migrations ",
            date: "2022 - Present",
            icon: <BsFillBriefcaseFill/>,
            tags: ["Python", "AWS", "Lambda", "ETL", "Docker", "PostgreSQL", "Alembic"]
        },
        {
            id: "work-2",
            title: "MS Data Science",
            company: "University of San Francisco",
            description: "Industry-focused degree providing expertise in ML and " +
                "data engineering principles. Strong emphasis on practical application through intensive, project-based learning.",
            date: "2022 - 2023",
            icon: <IoMdSchool/>,
            tags: ["Python", "SQL", "NoSQL", "ML", "NLP", "Distributed Computing", "Deep Learning", "MLOps", "Data Engineering"]
        },
        {
            id: "work-1",
            title: "Data Scientist",
            company: "Deloitte",
            description: "Developed customized ML and data engineering solutions for global clients, specializing in NLP, computer " +
                "vision, and data ETL infrastructure projects. Collaborated closely with senior stakeholders and executives.",
            date: "2019 - 2022",
            icon: <BsFillBriefcaseFill/>,
            tags: ["Python", "SQL", "ETL", "NLP", "Computer Vision", "AWS", "PyTorch"]
        },
        {
            id: "work-0",
            title: "MS Physics",
            company: "University of Manchester",
            description: "Master's degree focused on machine learning research in astrophysics, developing novel automated classification methods for unidentified stars.",
            date: "2018 - 2019",
            icon: <IoMdSchool/>,
            tags: ["Python", "L2 Regression", "Random Forests", "Monte Carlo Methods", "Fourier Analysis"]
        },
        {
            id: "work-0",
            title: "BS Physics",
            company: "University of Manchester",
            description: "Bachelor's degree providing fundamental knowledge in theoretical and practical physics along with advanced mathematical concepts.",
            date: "2015 - 2018",
            icon: <IoMdSchool/>,
            tags: ["Linear Algebra", "Calculus", "Python", "C++", "OOP", "Statistical Physics", "Data Analysis"]
        }
    ]
}


export default homeConfig