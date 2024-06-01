import React, { useState, useEffect } from 'react';
import './Skills.css'; // Import the CSS file for styling
import bgImage from './images/bg.avif'; // Import the background image

const Skills = () => {
  const [skillsWithImages, setSkillsWithImages] = useState([]);

  useEffect(() => {
    const fetchSkillImages = async () => {
      const skillsWithImages = [];
      const skills = [
        "Python", "Django", "React.js", "Portfolio Websites", "WordPress",
        "E-commerce App", "Data Analysis", "Machine Learning", "PHP",
        "Laravel", "Shopify", "Problem Solving", "Github", "LinkedIn",
        "Heroku", "AWS", "Postman", "Node.js", "MongoDB", "PostgreSQL", 
        "SQL", "Express", "Artificial Intelligence", "Machine Learning" 
        
      ];

      for (const skill of skills) {
        skillsWithImages.push({ skill });
      }
      setSkillsWithImages(skillsWithImages);
    };

    fetchSkillImages();
  }, []);

  return (
    <div className="skills-container" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="content-container">
        <h1 className="heading">Our Skills</h1>
        <div className="top-row">
          <div className="what-i-do">What I Do</div>
          <div className="who-i-am">
            Hi, I'm Umar Murtaza, a computer science enthusiast from Pakistan, currently based in Lahore. With over 2 years of experience at System Heuristics Software Company, I've honed my skills in software development and problem-solving.
          </div>
        </div>
        <div className="skills-list">
          {skillsWithImages.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-name">{skill.skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
