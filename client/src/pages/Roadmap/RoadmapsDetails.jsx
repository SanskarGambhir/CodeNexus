import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { gsap } from "gsap";

const roadmaps = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Master the skills needed to become a frontend developer, with the latest technologies and best practices.",
    skills: [
      "HTML & CSS",
      "JavaScript & DOM Manipulation",
      "Frontend Frameworks (React, Vue, Angular)",
      "Responsive Design",
      "Version Control (Git & GitHub)",
      "Performance Optimization",
      "Testing (Jest, Mocha)",
    ],
    resources: [
      "MDN Web Docs (HTML, CSS, JS)",
      "FreeCodeCamp - Frontend Development",
      "React Documentation",
      "JavaScript.info",
    ],
    timeline: [
      {
        title: "Week 1",
        description: "Learn HTML, CSS, and JavaScript fundamentals.",
        icon: <FaHtml5 />,
        color: "bg-gradient-to-r from-orange-400 to-orange-600",
      },
      {
        title: "Week 2",
        description: "Work on responsive design principles, Flexbox, and Grid.",
        icon: <FaCss3Alt />,
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
      },
      {
        title: "Week 3",
        description: "Start with React basics (components, state, props).",
        icon: <FaReact />,
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
      },
      {
        title: "Week 4",
        description: "Version control with Git and GitHub, deploy your first website.",
        icon: <FaGithub />,
        color: "bg-gradient-to-r from-gray-400 to-gray-600",
      },
      {
        title: "Week 5",
        description: "Learn testing with Jest and Mocha.",
        icon: <FaJsSquare />,
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      },
    ],
    subtopics: {
      html_css: [
        "HTML5 elements",
        "CSS3 Flexbox",
        "CSS Grid",
        "Responsive Layouts",
      ],
      js: [
        "JavaScript syntax",
        "DOM manipulation",
        "ES6 features",
        "Asynchronous JavaScript (Promises, async/await)",
      ],
      react: [
        "React components",
        "React state management",
        "Hooks (useState, useEffect)",
        "React Router",
        "React Testing Library",
      ],
      performance: ["Lazy loading", "Code splitting", "Web Vitals"],
    },
  },
  
  {
    id: 2,
    title: "Backend Development",
    description:
      "Learn the skills to build server-side applications, including working with databases, APIs, and server deployment.",
    skills: [
      "Node.js",
      "Express.js",
      "Databases (MongoDB, MySQL)",
      "REST APIs",
      "Authentication & Authorization",
      "Version Control (Git & GitHub)",
      "Docker & Deployment",
    ],
    resources: [
      "Node.js Documentation",
      "Express.js Documentation",
      "MongoDB University",
      "FreeCodeCamp - Backend Development",
    ],
    timeline: [
      {
        title: "Week 1",
        description: "Learn Node.js basics, including modules and npm.",
        icon: <FaNodeJs />,
        color: "bg-gradient-to-r from-green-400 to-green-600",
      },
      {
        title: "Week 2",
        description: "Understand Express.js for building APIs.",
        icon: <FaNodeJs />,
        color: "bg-gradient-to-r from-green-400 to-green-600",
      },
      {
        title: "Week 3",
        description: "Learn how to interact with databases (MongoDB or MySQL).",
        icon: <FaDatabase />,
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      },
      {
        title: "Week 4",
        description: "Build RESTful APIs and manage authentication.",
        icon: <FaGithub />,
        color: "bg-gradient-to-r from-gray-400 to-gray-600",
      },
      {
        title: "Week 5",
        description: "Learn Docker and deploy your backend applications.",
        icon: <FaDocker />,
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
      },
    ],
    subtopics: {
      node: [
        "Node.js basics",
        "npm and modules",
        "Asynchronous JavaScript",
        "File System module",
      ],
      express: [
        "Building APIs with Express",
        "Middlewares",
        "Routing in Express",
        "Error handling",
      ],
      database: [
        "MongoDB basics",
        "MongoDB CRUD operations",
        "SQL vs NoSQL",
        "MySQL basics",
      ],
      deployment: ["Docker basics", "Containerization", "Deploying with Docker"],
    },
  },

  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Become a full-stack developer by mastering both frontend and backend technologies and how they work together.",
    skills: [
      "Frontend (HTML, CSS, JavaScript, React)",
      "Backend (Node.js, Express.js)",
      "Databases (MongoDB, MySQL)",
      "APIs (RESTful)",
      "Authentication & Authorization",
      "Version Control (Git & GitHub)",
      "Deployment (Docker, AWS, Heroku)",
    ],
    resources: [
      "The Odin Project - Fullstack Development",
      "Fullstackopen - University of Helsinki",
      "FreeCodeCamp - Fullstack Development",
      "MDN Web Docs (HTML, CSS, JS, Node)",
    ],
    timeline: [
      {
        title: "Week 1",
        description: "Learn HTML, CSS, and JavaScript fundamentals.",
        icon: <FaHtml5 />,
        color: "bg-gradient-to-r from-orange-400 to-orange-600",
      },
      {
        title: "Week 2",
        description: "Learn React for building dynamic frontend applications.",
        icon: <FaReact />,
        color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
      },
      {
        title: "Week 3",
        description: "Learn Node.js and Express for backend development.",
        icon: <FaNodeJs />,
        color: "bg-gradient-to-r from-green-400 to-green-600",
      },
      {
        title: "Week 4",
        description: "Learn to build and connect databases (MongoDB or MySQL).",
        icon: <FaDatabase />,
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      },
      {
        title: "Week 5",
        description: "Deploy your full-stack app with Docker and cloud services.",
        icon: <FaDocker />,
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
      },
    ],
    subtopics: {
      frontend: [
        "HTML5, CSS3, and JavaScript",
        "React basics",
        "State management",
        "Frontend Testing",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "Building APIs",
        "Authentication & Authorization",
      ],
      database: [
        "MongoDB & Mongoose",
        "MySQL basics",
        "SQL vs NoSQL",
      ],
      deployment: [
        "Docker & Containers",
        "Cloud Hosting (AWS, Heroku)",
        "CI/CD pipelines",
      ],
    },
  },
];

const RoadmapsDetail = () => {
  const roadmap = roadmaps[0];  // Adjust this to change between Frontend, Backend, or Fullstack Roadmap



  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 lg:py-24 px-4 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 mb-8 text-center neon-glow">
          {roadmap.title} - Detailed Roadmap
        </h2>
        <p className="text-xl text-gray-400 mb-8 text-center max-w-3xl mx-auto">
          {roadmap.description}
        </p>

        {/* Timeline Section */}
        <section className="timeline-section mb-12">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mb-6 text-center neon-glow">
            Timeline
          </h3>

          <div className="flex flex-col items-center">
            {/* Timeline Steps */}
            <div className="relative w-full flex flex-col items-center space-y-16">
              {roadmap.timeline.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-8 timeline-step"
                >
                  {/* Connecting line */}
                  {index !== 0 && (
                    <div className="w-24 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
                  )}

                  {/* Step Item */}
                  <div
                    className={`flex items-center justify-center w-20 h-20 rounded-full ${step.color} text-white neon-glow shadow-lg transform hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-3xl">{step.icon}</div>
                  </div>

                  <div className="text-center text-gray-400 w-1/2">
                    <h4 className="text-2xl font-semibold text-white">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section mb-12">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mb-6 text-center neon-glow">
            Skills Learned
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmap.skills.map((skill, index) => {
              let icon;
              switch (skill) {
                case "HTML & CSS":
                  icon = <FaHtml5 className="text-3xl text-neon-orange" />;
                  break;
                case "JavaScript & DOM Manipulation":
                  icon = <FaJsSquare className="text-3xl text-neon-yellow" />;
                  break;
                case "Frontend Frameworks (React, Vue, Angular)":
                  icon = <FaReact className="text-3xl text-neon-cyan" />;
                  break;
                case "Version Control (Git & GitHub)":
                  icon = <FaGithub className="text-3xl text-neon-gray" />;
                  break;
                case "Node.js":
                  icon = <FaNodeJs className="text-3xl text-neon-green" />;
                  break;
                case "Database":
                  icon = <FaDatabase className="text-3xl text-neon-yellow" />;
                  break;
                case "Docker":
                  icon = <FaDocker className="text-3xl text-neon-blue" />;
                  break;
                default:
                  icon = <FaCss3Alt className="text-3xl text-neon-blue" />;
                  break;
              }
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-all duration-300 skill-card"
                >
                  {icon}
                  <span className="text-lg text-gray-300">{skill}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Subtopics Section */}
        <section className="subtopics-section mb-12">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 mb-6 text-center neon-glow">
            Key Subtopics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(roadmap.subtopics).map(([category, subtopics], index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h4 className="text-xl text-white font-semibold mb-4">{category}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="text-gray-300">
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6 text-center neon-glow">
            Resources
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-300">
            {roadmap.resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RoadmapsDetail;
