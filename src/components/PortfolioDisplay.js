import React from 'react';
import './PortfolioDisplay.css';
import LinkedIn from './linkedin.png'; // Import the LinkedIn logo
import GitHub from './github.png'; // Import the GitHub logo  
import Email from './email.jpeg'; // Import the Email logo
import CVFile from './cv-file.pdf'; // Import the CV file from the components folder
import profile from './jay.jpg'; // Import the profile picture 


const PortfolioDisplay = () => {
  // Hardcoded data
  const defaultData = {
    name: 'Jaya Shankar',
    picture: profile,
    shortDescription: 'I am a passionate software developer actively seeking new opportunities to leverage my skills and contribute to impactful projects. With a strong background in computer science and hands-on experience in various programming languages and technologies, I thrive on solving complex problems and building innovative solutions. My commitment to continuous learning and professional growth drives me to stay updated with the latest industry trends and advancements.',
    email: 'xxxxxxxxx',
    linkedIn: 'https://www.linkedin.com/in/jayashankar-kona-9038b0249/',
    github: 'https://github.com/slash-jay',
    journey: [
      { companyName: 'CMR COLLEGE OF ENGINEERING AND TECHOLOGY ', years: '2021 - 2025', description: 'BRANCH -CSE-AIML' },
      // { companyName: 'Tech Company B', years: '2019 - 2021', description: 'Contributed to various web development projects.' },
    ],
    skills: [
      { category: 'Programming Languages', details: 'c,c++, Java,python' },
      { category: 'Frameworks', details: 'React, Node js, Spring Boot,express js' },
      { categroy :'web technologies',details:'HTML,CSS,JavaScript'},
      { category: 'Databases', details: 'MySQL, MongoDB' },
      { category: 'Tools', details: 'Git, VS Code' },
      
    ],
    projects: [
      {
        title: 'FIX ME',
        projectImage: null, // Replace with a default image if desired
        description: ' Web portal for the business partners ,investors,job seekers for collaboration.',
        technologies: 'Html,css,JavaScript, Node.js, Express, MongoDB',
        github: 'https://github.com/slash-jay/fixme11',
        liveDemo: ':https://fixme11.onrender.com/',
      },
      {
        title: 'Mental Health',
        projectImage: null, // Replace with a default image if desired
        description: 'Web portal for the mental health assessment for the teeenagers and adults.',
        technologies: 'Python,firebase,ML classifiers',
        github: 'https://github.com/slash-jay/mgit_hack',
        
      },
      {
        title: 'quicky',
        projectImage: null, // Replace with a default image if desired
        description: 'a web application for securely saving notes and protected text online without requiring user accounts.',
        technologies:'Html,css,JavaScript, Node.js, Express, MongoDB,CryptoJs',
        github: 'https://github.com/slash-jay/quicky',
        liveDemo: 'https://quicky-1.onrender.com/',

      },
      {
        title: 'MakeItEasy',
        projectImage: null, // Replace with a default image if desired
        description: 'Developed a Chrome extension for students featuring a versatile notepad with textformatting, screenshot capture, and note management capabilities',
        technologies: ': HTML,CSS,JAVASCRIPT,Chrome Extension APIs',
        github: 'B-https://github.com/slash-jay/makeiteasy',
      }
      
    ],
    cv: CVFile, // Set the CV file path
  };

  return (
    <div className="portfolio-display">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#cv">CV</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1 className="animated-text">{defaultData.name}'s Portfolio</h1>

        {/* Profile Picture */}
        {defaultData.picture && (
          <section id="profile-picture" className="portfolio-section">
          
            <img src={defaultData.picture} alt="Profile" className="profile-picture" />
            {defaultData.shortDescription && (
              <p className="short-description">{defaultData.shortDescription}</p>
              
            )}
          </section>
        )}

        {/* Contact Information */}
        {defaultData.email || defaultData.linkedIn || defaultData.github ? (
          <section id="contact" className="portfolio-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Email} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
                {defaultData.email && (
                  <p><strong>Email:</strong> {defaultData.email}</p>
                )}
              </div>

              {/* LinkedIn */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={LinkedIn} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
                {defaultData.linkedIn && (
                  <p style={{ margin: 0 }}>
                    <strong>LinkedIn:</strong>
                    <a href={defaultData.linkedIn} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0077B5', fontWeight: 'bold', marginLeft: '5px' }}>
                      LinkedIn Profile
                    </a>
                  </p>
                )}
              </div>

              {/* GitHub */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={GitHub} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} alt="GitHub Logo" />
                {defaultData.github && (
                  <p style={{ margin: 0 }}>
                    <strong>GitHub:</strong>
                    <a href={defaultData.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#181717', marginLeft: '5px' }}>
                      {defaultData.github}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </section>
        ) : null}

        {/* Journey Section */}
        {defaultData.journey.length > 0 && (
          <section id="journey" className="portfolio-section">
            <h2>Journey</h2>
            {defaultData.journey.map((journey, index) => (
              journey.companyName && (
                <div key={index} className="journey-item interactive-card">
                  <h3>{journey.companyName} ({journey.years})</h3>
                  {journey.description && <p>{journey.description}</p>}
                </div>
              )
            ))}
          </section>
        )}

        {/* Skills Section */}
        {defaultData.skills.length > 0 && (
          <section id="skills" className="portfolio-section">
            <h2>Skills</h2>
            {defaultData.skills.map((skill, index) => (
              skill.category && (
                <div key={index} className="skill-item interactive-card">
                  <strong>{skill.category}</strong>: {skill.details}
                </div>
              )
            ))}
          </section>
        )}

        {/* Projects Section */}
        {defaultData.projects.length > 0 && (
          <section id="projects" className="portfolio-section">
            <h2>Projects</h2>
            {defaultData.projects.map((project, index) => (
              project.title && (
                <div key={index} className="project-item interactive-card">
                  <div className="project-title-container">
                    <p className="project-title move-title">{project.title}</p>
                  </div>
                  {project.projectImage ? (
                    <div className="project-image-container">
                      <img
                        src={URL.createObjectURL(project.projectImage)}
                        alt={project.title}
                        className="project-image move-image"
                      />
                    </div>
                  ) : (
                    <div className="project-title-container">
                      <p className="project-title move-title"></p>
                    </div>
                  )}
                  {project.description && <p>{project.description}</p>}
                  {project.technologies && (
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                  )}
                  {project.github && (
                    <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
                  )}
                  {project.liveDemo && (
                    <p><strong>Live Demo:</strong> <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">{project.liveDemo}</a></p>
                  )}
                </div>
              )
            ))}
          </section>
        )}

        {/* CV Section */}
        {defaultData.cv && (
          <section id="cv" className="portfolio-section">
            <h2>CV</h2>
            <div>
              <a href={defaultData.cv} target="_blank" rel="noopener noreferrer" className="cv-link">View CV</a>
              <a href={defaultData.cv} download className="cv-link">Download CV</a>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}

    </div>
  );
};

export default PortfolioDisplay;
