import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutSarvesh extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        if (typeof ReactGA !== 'undefined' && ReactGA.send) {
            ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });
        }

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    <div className="flex flex-col">
                        <div className="px-2 py-1 my-1">
                            <div className="flex justify-between">
                                <div className=" font-bold text-white">Sections</div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div onClick={this.changeScreen} id="about" className={`px-2 py-1 my-1 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-yellow-700 hover:border-opacity-100 hover:border-l-4 border-l-4 border-transparent cursor-pointer ${this.state.active_screen === "about" ? "bg-ub-warm-grey bg-opacity-10 border-yellow-700 border-opacity-100" : ""}`}>
                                About
                            </div>
                            <div onClick={this.changeScreen} id="education" className={`px-2 py-1 my-1 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-yellow-700 hover:border-opacity-100 hover:border-l-4 border-l-4 border-transparent cursor-pointer ${this.state.active_screen === "education" ? "bg-ub-warm-grey bg-opacity-10 border-yellow-700 border-opacity-100" : ""}`}>
                                Education
                            </div>
                            <div onClick={this.changeScreen} id="skills" className={`px-2 py-1 my-1 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-yellow-700 hover:border-opacity-100 hover:border-l-4 border-l-4 border-transparent cursor-pointer ${this.state.active_screen === "skills" ? "bg-ub-warm-grey bg-opacity-10 border-yellow-700 border-opacity-100" : ""}`}>
                                Skills
                            </div>
                            <div onClick={this.changeScreen} id="projects" className={`px-2 py-1 my-1 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-yellow-700 hover:border-opacity-100 hover:border-l-4 border-l-4 border-transparent cursor-pointer ${this.state.active_screen === "projects" ? "bg-ub-warm-grey bg-opacity-10 border-yellow-700 border-opacity-100" : ""}`}>
                                Projects
                            </div>
                            <div onClick={this.changeScreen} id="resume" className={`px-2 py-1 my-1 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-yellow-700 hover:border-opacity-100 hover:border-l-4 border-l-4 border-transparent cursor-pointer ${this.state.active_screen === "resume" ? "bg-ub-warm-grey bg-opacity-10 border-yellow-700 border-opacity-100" : ""}`}>
                                Resume
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutSarvesh;

export const displayAboutSarvesh = () => {
    return <AboutSarvesh />;
};

function About() {
    return (
        <div className="h-full overflow-y-auto px-2 py-4">
            <div className="w-20 md:w-28 mx-auto bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Sarvesh Shelgaonkar Logo" />
            </div>
            <div className="mt-2 md:mt-4 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Sarvesh Shelgaonkar</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer!</span></div>
            </div>
            <div className="mt-2 md:mt-4 relative pt-px bg-white w-32 md:w-48 mx-auto">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-2 md:mt-4 leading-tight tracking-tight text-xs md:text-base w-full emoji-list px-2">
                <li className="list-pc mb-2">I'm pursuing <span className="font-medium">B.E. in Computer Engineering</span> at Pune Institute of Computer Technology (PICT) with a SGPA of 9.43. I've completed my Frontend Developer internship at <u className='cursor-pointer'> <a href="https://pict.edu/" target={"_blank"}>PICT</a> </u> (Jan-Mar 2024), and I'm passionate about Full Stack Development with expertise in MERN stack! ( Hit me up <a className='text-underline' href='mailto:sarveshshelgaonkar864@gmail.com'>sarveshshelgaonkar864@gmail.com</a> )</li>
                <li className="mt-2 list-building mb-2"> I enjoy building scalable web applications that solve real-world problems. As Marketing Head of PASC, I boosted event attendance by 40% and led social initiatives reaching 10,000+ people.</li>
                <li className="mt-2 list-time mb-2"> When I am not coding my next project, I love solving coding challenges (250+ problems solved), playing chess, or working on AI-powered applications with Azure deployment.</li>
                <li className="mt-2 list-star mb-4"> I've secured top positions in national hackathons including Top 5 in Inspiron 4.0 among 1100+ teams, Top 3 at Impetus & Concepts, and recently achieved Semifinalist positions in Adobe Hackathon 2025 for innovative solution development and Walmart Sparkathon 2025 showcasing exceptional problem-solving abilities. Additionally, I hold certifications in DSA, C++, Java!</li>
            </ul>
        </div>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            
            {/* Main content with image */}
            <div className="flex flex-col lg:flex-row items-start justify-start w-full mt-4 gap-6">
                {/* Left side - Education List */}
                <div className="w-full lg:w-3/5 flex-shrink-0">
                    <ul className="mt-4 ml-4 px-0 md:px-1">
                        <li className="list-disc">
                            <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                                Pune Institute of Computer Technology (PICT)
                            </div>
                            <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                            <div className=" text-sm md:text-base">B.E. in Computer Engineering</div>
                            <div className="text-sm text-gray-300 font-bold mt-1">SGPA &nbsp; 9.43/10</div>
                        </li>
                        <li className="list-disc mt-5">
                            <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                                SVJ College
                            </div>
                            <div className=" text-sm text-gray-400 mt-0.5">June 2020 - March 2022</div>
                            <div className=" text-sm md:text-base">HSC - Maharashtra Board</div>
                            <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 85%</div>
                        </li>
                        <li className="list-disc mt-5">
                            <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                                Central Public School
                            </div>
                            <div className=" text-sm text-gray-400 mt-0.5">Till March 2020</div>
                            <div className=" text-sm md:text-base">SSC - CBSE Board</div>
                            <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 90.4%</div>
                        </li>
                    </ul>
                </div>
                
                {/* Right side - Your Image */}
                <div className="w-full lg:w-2/5 flex justify-center lg:justify-center">
                    <div className="w-48 md:w-56 lg:w-72 h-96 md:h-[28rem] lg:h-[32rem] flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-lg" src="./images/logos/my.jpg" alt="Sarvesh Shelgaonkar" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks with expertise in MERN stack.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Full Stack Development, React.js, Node.js & AI-powered applications!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used technologies</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="C" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="HTML5" />
                        <img className="m-1" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="CSS3" />
                        <img className="m-1" src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=Git&logoColor=white" alt="Git" />
                        <img className="m-1" src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=GitHub&logoColor=white" alt="GitHub" />
                        <img className="m-1" src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=Visual%20Studio%20Code&logoColor=white" alt="VS Code" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=React&logoColor=black" alt="React" />
                        <img className="m-1" src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=Node.js&logoColor=white" alt="Node.js" />
                        <img className="m-1" src="https://img.shields.io/badge/-Express.js-000000?style=flat&logo=Express&logoColor=white" alt="Express.js" />
                        <img className="m-1" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB" />
                        <img className="m-1" src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=Firebase&logoColor=black" alt="Firebase" />
                        <img className="m-1" src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap" />
                        <img className="m-1" src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat&logo=Tailwind%20CSS&logoColor=white" alt="Tailwind CSS" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "SmartChain AI",
            date: "Dec 2024",
            link: "https://github.com/Sarvesh-Shelgaonkar/SmartChain-AI",
            github: "https://github.com/Sarvesh-Shelgaonkar/SmartChain-AI",
            description: [
                "Developed an advanced AI-powered blockchain analytics platform that leverages machine learning algorithms to provide intelligent insights into cryptocurrency trends, smart contract analysis, and decentralized finance (DeFi) protocols. Features real-time data processing, predictive analytics, and automated trading signals.",
            ],
            domains: ["python", "ai", "blockchain", "machine-learning", "tensorflow", "web3"]
        },
        {
            name: "PrimeEstate Solutions",
            date: "Oct 2024",
            link: "https://mern-estate-5j9z.onrender.com/",
            github: "https://github.com/Sarvesh-Shelgaonkar/mern-estate",
            description: [
                "Developed a full-stack MERN app for property listings management with secure authentication using JWT, Firebase, and Google OAuth. Features CRUD operations, advanced search, and image upload functionality.",
            ],
            domains: ["mongodb", "express", "react", "nodejs", "tailwindcss", "firebase"]
        },
        {
            name: "AI-Powered SQL Query Generator (TechOptimizers)",
            date: "Sep 2024",
            link: "https://github.com/vidhikoul/TechOptimizers",
            description: [
                "Built AI-Powered SQL Assistant using React, Node.js, FastAPI, and CodeLlama for natural language to SQL conversion. Enhanced query accuracy by 85% with schema awareness, supporting MySQL, Trino, and Spark SQL. Deployed on Azure VM with scalable hosting.",
            ],
            domains: ["react", "nodejs", "fastapi", "mysql", "azure", "ai"]
        },
        {
            name: "TradeForge",
            date: "Aug 2024",
            link: "https://github.com/Sarvesh-Shelgaonkar/TradeForge",
            description: [
                "Transformed trading experience by developing high-volume stock platform processing over 1,000 daily transactions. Engineered RESTful APIs for real-time stock data, reducing latency by 20% and boosting user engagement by 30%.",
            ],
            domains: ["nodejs", "express", "mongodb", "react", "javascript"]
        },
        {
            name: "WanderLust - Airbnb-Inspired Full-Stack Web App",
            date: "Jul 2024",
            link: "https://github.com/Sarvesh-Shelgaonkar/WanderLust",
            description: [
                "Built a robust, feature-rich full-stack application inspired by Airbnb using the MERN stack (MongoDB, Express.js, Node.js). The app enables users to explore listings, manage bookings, and interact with an intuitive map-based interface. Integrated Passport.js for secure authentication, Cloudinary for image storage, and Mapbox for dynamic location visualizations. Core features include full CRUD operations for listings and reviews, user account management, and session handling via Express-Session and Connect Mongo.",
            ],
            domains: ["nodejs", "express", "mongodb", "javascript", "bootstrap"]
        },
        {
            name: "Simon Game",
            date: "Jun 2024",
            link: "https://github.com/Sarvesh-Shelgaonkar/Simon-Game",
            description: [
                "Developed a digital version of the classic Simon game to enhance players' memory and attention skills. Utilized HTML, CSS, and JavaScript to build an engaging and responsive game interface. Integrated score tracking features to monitor player progress. Implemented multiple difficulty levels, enabling progressively challenging gameplay and increased replayability.",
            ],
            domains: ["javascript", "html", "css"]
        },
        {
            name: "Library Management System (Granthpal)",
            date: "Jan 2024 - Mar 2024",
            link: "https://github.com/Sarvesh-Shelgaonkar/granthpal",
            description: [
                "Built user-friendly frontend for Library Management System using React.js & Bootstrap during internship at PICT. Implemented dynamic UI components for book search, borrowing history, and user management with optimized performance.",
            ],
            domains: ["react", "bootstrap", "javascript", "nodejs"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "html": "orange-500",
        "css": "blue-400",
        "react": "blue-400",
        "nodejs": "green-500",
        "express": "gray-600",
        "mongodb": "green-600",
        "mysql": "blue-600",
        "tailwindcss": "blue-300",
        "bootstrap": "purple-500",
        "firebase": "red-600",
        "fastapi": "green-400",
        "azure": "blue-500",
        "ai": "purple-600",
        "next.js": "purple-600",
        "python": "yellow-400",
        "blockchain": "orange-400",
        "machine-learning": "pink-500",
        "tensorflow": "orange-600",
        "web3": "blue-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="my-4 w-5/6 md:w-3/4 text-center">
                <div className="text-sm text-gray-300 mb-4">
                    Here are some of my key projects showcasing Full Stack Development and AI integration:
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Sarvesh_Shelgaonkar_Resume.pdf" title="sarvesh shelgaonkar resume" frameBorder="0"></iframe>
    )
}