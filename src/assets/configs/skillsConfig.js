import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiMongodb,
    SiApachespark,
    SiNumpy,
    SiPandas,
    SiPytorch,
    SiScikitlearn,
    SiFastapi,
    SiAwslambda,
    SiAwsfargate,
    SiDatabricks,
    SiMlflow,
    SiAmazonec2,
    SiGooglecloud,
    SiMetafilter,
    SiKubernetes,
    SiOpenai
} from "react-icons/si";
import {
    BsFillTerminalFill, 
    BsDatabaseFillUp, 
    BsChatLeftText,
    BsGear
} from "react-icons/bs";
import {BiTestTube} from "react-icons/bi";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt, FaDatabase, FaAws} from "react-icons/fa";
import {MdOutlineCompare} from "react-icons/md"
import {GiMisdirection, GiPerspectiveDiceSixFacesOne} from "react-icons/gi"
import {TbMathPi, TbMathIntegralX, TbBrandMatrix} from "react-icons/tb"
import {HiOutlineDocumentText, HiOutlinePencilAlt} from "react-icons/hi";
import {
    AiOutlinePicture, 
    AiOutlineDotChart, 
    AiOutlineCluster
} from "react-icons/ai"

import React from "react";

const skillsConfig = {
    programmingSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "NumPy"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-learn"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "PyTorch"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaDatabase size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <BsFillTerminalFill size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiFastapi size={50}/>,
            text: "FastAPI"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <HiOutlineDocumentText size={50}/>,
            text: "NoSQL"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiMongodb size={50}/>,
            text: "MongoDB"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiApachespark size={50}/>,
            text: "Spark"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <BsDatabaseFillUp size={50}/>,
            text: "Alembic"
        }
    ],
    devToolSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaAws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiAwslambda size={50}/>,
            text: "Lambda"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiAwsfargate size={50}/>,
            text: "S3"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiAmazonec2 size={50}/>,
            text: "EC2"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiGooglecloud size={50}/>,
            text: "GCP"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Databricks"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiMlflow size={50}/>,
            text: "MLflow"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiMetafilter size={50}/>,
            text: "Metaflow"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiKubernetes size={50}/>,
            text: "KubeFlow"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiOpenai size={50}/>,
            text: "OpenAI"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <GiMisdirection size={50}/>,
            text: "Pinecone"
        }
    ],
    machineLearningSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <AiOutlineDotChart size={50}/>,
            text: "Regression"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <AiOutlineCluster size={50}/>,
            text: "Classification"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <BsChatLeftText size={50}/>,
            text: "NLP"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiAwslambda size={50}/>,
            text: "Transformers"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <AiOutlinePicture size={50}/>,
            text: "CV"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <BsGear size={50}/>,
            text: "Model Tuning"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <HiOutlinePencilAlt size={50}/>,
            text: "Feature Engineering"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <BiTestTube size={50}/>,
            text: "A/B Testing"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <TbMathPi size={50}/>,
            text: "Statistics"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <GiPerspectiveDiceSixFacesOne size={50}/>,
            text: "Probability"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <TbMathIntegralX size={50}/>,
            text: "Calculus"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <TbBrandMatrix size={50}/>,
            text: "Linear Algebra"
        }
    ],
}

export default skillsConfig
