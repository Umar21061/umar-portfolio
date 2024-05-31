import React from 'react';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  const skills = [
    { name: "Python", width: Math.floor(Math.random() * 11) + 90 },
    { name: "Django", width: Math.floor(Math.random() * 11) + 90 },
    { name: "React.js", width: Math.floor(Math.random() * 11) + 90 },
    { name: "Portfolio Websites", width: Math.floor(Math.random() * 21) + 80 },
    { name: "WordPress", width: Math.floor(Math.random() * 21) + 80 },
    { name: "E-commerce Development", width: Math.floor(Math.random() * 21) + 80 },
    { name: "Data Analysis", width: Math.floor(Math.random() * 11) + 90 },
    { name: "Machine Learning", width: Math.floor(Math.random() * 21) + 80 },
    { name: "PHP", width: Math.floor(Math.random() * 21) + 80 },
    { name: "Laravel", width: Math.floor(Math.random() * 21) + 80 },
    { name: "Shopify", width: Math.floor(Math.random() * 21) + 80 },
    { name: "Problem Solving", width: Math.floor(Math.random() * 11) + 90 }
  ];

  return (
    <div className="skills-container">
      <h1 className="heading">Our Skills</h1>
      <div className="skills-list">
        {skills.reduce((acc, skill, index) => {
          if (index % 2 === 0) {
            acc.push([skill]);
          } else {
            acc[acc.length - 1].push(skill);
          }
          return acc;
        }, []).map((pair, index) => (
          <div key={index} className="skill-row">
            {pair.map((skill, subIndex) => (
              <React.Fragment key={subIndex}>
                <div className="skill black-bg">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-bar-inner" style={{
                    width: `${skill.width}%`, // Use the stored width percentage
                    backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` // Random RGB color
                  }}>
                    <span className="percentage">{skill.width}%</span> {/* Display percentage */}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
