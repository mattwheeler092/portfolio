import React from 'react'
import { IoMdSchool } from 'react-icons/io';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Matt Wheeler</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Specialist",
        "Data Engineer",
        "Backend Developer"
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
                "overseeing end-to-end development of data pipelines, automation, and database migrations ",
            date: "2022 - Present",
            icon: <BsFillBriefcaseFill/>,
            tags: ["Python", "AWS", "Lambda", "ETL", "Docker", "PostgreSQL", "Alembic"]
        },
        {
            id: "work-2",
            title: "MS Data Science",
            company: "University of San Francisco",
            description: "Industry-focused advanced degree program providing comprehensive expertise in ML and " +
                "data engineering principles. Maintained emphasis on practical application through intensive, project-based learning.",
            date: "2022 - 2023",
            icon: <IoMdSchool/>,
            tags: ["Python", "SQL", "NoSQL", "ML", "NLP", "Distributed Computing", "Deep Learning", "MLOps", "Data Engineering"]
        },
        {
            id: "work-1",
            title: "Data Scientist",
            company: "Deloitte",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2019 - 2022",
            icon: <BsFillBriefcaseFill/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "MS Physics",
            company: "University of Manchester",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2018 - 2019",
            icon: <IoMdSchool/>,
            tags: ["python", "mssql", "pbi", "excel"]
        },
        {
            id: "work-0",
            title: "BS Physics",
            company: "University of Manchester",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2015 - 2018",
            icon: <IoMdSchool/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig