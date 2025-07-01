import React, { Component } from 'react';

export class CodeEditor extends Component {
    constructor() {
        super();
        this.state = {
            currentFile: 'portfolio.js',
            files: [
                { name: 'portfolio.js', type: 'javascript' },
                { name: 'styles.css', type: 'css' },
                { name: 'README.md', type: 'markdown' },
                { name: 'package.json', type: 'json' }
            ],
            code: `// Sarvesh Shelgaonkar - Portfolio Code
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const skills = [
        'React.js', 'Node.js', 'MongoDB', 
        'Express.js', 'JavaScript', 'C++',
        'AI Development', 'Full Stack'
    ];

    const projects = [
        {
            name: "PrimeEstate Solutions",
            tech: "MERN Stack",
            status: "Deployed ✅"
        },
        {
            name: "AI SQL Generator", 
            tech: "React + FastAPI",
            status: "Live 🚀"
        },
        {
            name: "TradeForge",
            tech: "Node.js + MongoDB", 
            status: "Production 💼"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="portfolio-container"
        >
            <h1>Welcome to Sarvesh's Portfolio</h1>
            <div className="skills-grid">
                {skills.map(skill => (
                    <span key={skill} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
            
            <div className="projects-section">
                {projects.map(project => (
                    <div key={project.name} className="project-card">
                        <h3>{project.name}</h3>
                        <p>Tech: {project.tech}</p>
                        <span className="status">{project.status}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Portfolio;

// PICT Student | SGPA: 9.43 | Full Stack Developer
// GitHub: https://github.com/Sarvesh-Shelgaonkar
// Email: sarveshshelgaonkar864@gmail.com`
        };
    }

    selectFile = (fileName) => {
        let newCode = '';
        switch(fileName) {
            case 'portfolio.js':
                newCode = this.state.code;
                break;
            case 'styles.css':
                newCode = `/* Sarvesh Portfolio Styles */
.portfolio-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 2rem;
    color: white;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.skill-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.skill-tag:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
}

.project-card {
    background: rgba(0, 0, 0, 0.3);
    padding: 1.5rem;
    border-radius: 15px;
    margin: 1rem 0;
    border-left: 4px solid #00ff88;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
}

.status {
    background: #00ff88;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: bold;
}`;
                break;
            case 'README.md':
                newCode = `# Sarvesh Shelgaonkar - Portfolio

## 🚀 About Me
- **Name**: Sarvesh Vivek Shelgaonkar
- **Education**: B.E. Computer Engineering at PICT
- **SGPA**: 9.43/10
- **Role**: Full Stack Developer

## 💻 Tech Stack
- **Frontend**: React.js, JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, MySQL
- **Tools**: Git, VS Code, Postman
- **Cloud**: Azure, Firebase

## 🏆 Achievements
- 🥇 Top 5 in Inspiron 4.0 (1100+ teams)
- 🥉 Top 3 at Impetus & Concepts
- 💪 250+ Coding Problems Solved
- 📈 Marketing Head at PASC (40% event attendance boost)

## 📂 Featured Projects

### 1. PrimeEstate Solutions
- **Tech**: MERN Stack
- **Features**: JWT Auth, Firebase, Google OAuth
- **Status**: Live on Render

### 2. AI SQL Generator
- **Tech**: React + FastAPI + CodeLlama
- **Features**: 85% query accuracy, Schema awareness
- **Status**: Azure Deployment

### 3. TradeForge
- **Tech**: Node.js + MongoDB
- **Features**: 1000+ daily transactions, Real-time APIs
- **Status**: Production Ready

## 📞 Contact
- **Email**: sarveshshelgaonkar864@gmail.com
- **GitHub**: https://github.com/Sarvesh-Shelgaonkar
- **LinkedIn**: https://www.linkedin.com/in/sarvesh-shelgaonkar-04a1b8248/

---
*Built with ❤️ by Sarvesh Shelgaonkar*`;
                break;
            case 'package.json':
                newCode = `{
  "name": "sarvesh-portfolio",
  "version": "2.0.0",
  "description": "Sarvesh Shelgaonkar's Professional Portfolio",
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "deploy": "npm run build && npm run export"
  },
  "keywords": [
    "portfolio",
    "react",
    "nextjs",
    "full-stack",
    "mern",
    "developer",
    "pict",
    "computer-engineering"
  ],
  "author": {
    "name": "Sarvesh Shelgaonkar",
    "email": "sarveshshelgaonkar864@gmail.com",
    "url": "https://github.com/Sarvesh-Shelgaonkar"
  },
  "dependencies": {
    "react": "^18.2.0",
    "next": "^13.1.2",
    "framer-motion": "^10.6.1",
    "tailwindcss": "^3.2.4"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Sarvesh-Shelgaonkar/portfolio"
  },
  "license": "MIT"
}`;
                break;
            default:
                newCode = this.state.code;
        }
        
        this.setState({ 
            currentFile: fileName,
            code: newCode 
        });
    }

    render() {
        const { currentFile, files, code } = this.state;

        return (
            <div className="w-full h-full bg-ub-cool-grey text-white flex">
                {/* File Explorer */}
                <div className="w-1/4 bg-ub-grey border-r border-gray-600 p-2">
                    <h3 className="text-sm font-bold mb-4 text-gray-300">EXPLORER</h3>
                    <div className="space-y-1">
                        {files.map(file => (
                            <div 
                                key={file.name}
                                onClick={() => this.selectFile(file.name)}
                                className={`p-2 text-sm cursor-pointer rounded hover:bg-ub-warm-grey hover:bg-opacity-20 ${
                                    currentFile === file.name ? 'bg-blue-600 bg-opacity-50' : ''
                                }`}
                            >
                                <span className="mr-2">
                                    {file.type === 'javascript' && '📄'}
                                    {file.type === 'css' && '🎨'}
                                    {file.type === 'markdown' && '📝'}
                                    {file.type === 'json' && '⚙️'}
                                </span>
                                {file.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 flex flex-col">
                    {/* Tab Bar */}
                    <div className="bg-ub-grey border-b border-gray-600 p-2">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-300 mr-2">
                                {currentFile === 'portfolio.js' && '📄'}
                                {currentFile === 'styles.css' && '🎨'}
                                {currentFile === 'README.md' && '📝'}
                                {currentFile === 'package.json' && '⚙️'}
                            </span>
                            <span className="text-sm">{currentFile}</span>
                            <div className="ml-2 w-2 h-2 bg-orange-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Code Area */}
                    <div className="flex-1 p-4 overflow-auto">
                        <pre className="text-sm leading-relaxed">
                            <code className="text-green-400">
                                {code}
                            </code>
                        </pre>
                    </div>

                    {/* Status Bar */}
                    <div className="bg-blue-600 text-white p-2 text-xs flex justify-between">
                        <span>Sarvesh's Portfolio Code</span>
                        <span>Line 1, Column 1 | JavaScript | UTF-8</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeEditor;

export const displayCodeEditor = () => {
    return <CodeEditor />;
}