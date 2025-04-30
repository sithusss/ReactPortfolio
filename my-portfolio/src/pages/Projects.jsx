import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Personal Portfolio Website",
      tech: "React, CSS3, HTML5",
      description: "A fully responsive portfolio showcasing projects, education, and contact info."
    },
    {
      title: "E-Commerce Platform",
      tech: "MERN Stack",
      description: "Online shopping platform with product listings, cart, and payment integration."
    },
    {
      title: "AI Chatbot",
      tech: "Python, Flask, NLP",
      description: "An intelligent chatbot that answers questions and simulates conversation."
    }
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p className="tech">{proj.tech}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
