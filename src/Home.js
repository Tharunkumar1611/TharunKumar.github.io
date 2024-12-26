import React from "react";
import "./Home.css";
import CertificationSection from './CertificationSection'; 
import ProblemSolving from './ProblemSolving';
import PhotoSection from "./PhotoSection";



const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="hero-section">
        <h1 className="hero-title">Hi, I'm Tharun Kumar</h1>
        <p className="hero-subtitle">AI and Data Science Enthusiast | Software Developer</p>
      </section>


      <section id="education" className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-box">
          <h3>Carmel Garden Matriculation Higher Secondary School</h3>
          <p><strong>Duration:</strong> 2010 – 2023</p>
          <p><strong>Grades:</strong> 11th Grade – 92.3%, 12th Grade – 92.3%</p>
        </div>
        <div className="education-box">
          <h3>Sri Krishna College of Engineering and Technology</h3>
          <p><strong>Degree:</strong> B.Tech in Artificial Intelligence and Data Science</p>
          <p><strong>Duration:</strong> 2023 – 2027</p>
          <p><strong>CGPA:</strong> 8.22 (Till 3rd Semester)</p>
        </div>
      </section>
             
      <section id="skills" className="skills-section">
      
        
        <div className="skills-box">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skills-box">
          <h3>Developer Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Workbench</li>
            <li>Postman</li>
            <li>Eclipse</li>
          </ul>
        </div>
        <div className="skills-box">
          <h3>Technologies/Frameworks</h3>
          <ul>
            <li>REST API</li>
            <li>Node.js</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>GitHub</li>
          </ul>
        </div>
      </section>
      

      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="project-box">
          <h3>SKCET-Medicare</h3>
          <p>
            Developed a Hospital Management System integrating functionalities for patients, doctors, and receptionists. It streamlines patient registration, appointment scheduling, and medical history management, ensuring seamless communication between healthcare providers.
          </p>
          <p><strong>Tools Used:</strong> React, PHP, MySQL</p>
        </div>
        <div className="project-box">
          <h3>AI Optiflow Precision Irrigation Management System</h3>
          <p>
            The AI Optiflow system optimizes irrigation in agriculture by analyzing parameters like soil moisture, weather forecasts, and crop needs, offering precise irrigation recommendations that reduce water waste and increase crop yield.
          </p>
          <p><strong>Tools Used:</strong> React, Spring Boot, MySQL, Machine Learning</p>
        </div>
        <div className="project-box">
          <h3>Beatbox Music App</h3>
          <p>
            Developed a collaborative beatbox application similar to Spotify, allowing users to create, share, and listen to music tracks. The app features real-time collaboration, enabling multiple users to contribute to a single track simultaneously.
          </p>
          <p><strong>Tools Used:</strong> React, Firebase</p>
          <p><a href="https://beatbox-63b72.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
        </div>
        <div className="project-box">
          <h3>Smart Logistics Optimization</h3>
          <p>
            A logistics optimization system designed to track parcels, optimize routes, and manage logistics efficiently using advanced algorithms. The system includes real-time tracking and parcel management.
          </p>
          <p><strong>Tools Used:</strong> React, Spring Boot, Workbench, Maven, Postman</p>
          <p><a href="https://github.com/Tharunkumar1611/Smart-Logistics-Optimization" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
      </section>
        <ProblemSolving/>
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-box">
          <h3>Accenture Forage</h3>
          <p><strong>Role:</strong> Data Analytics and Visualization Job Simulation Intern</p>
          <p><strong>Duration:</strong> Feb 2024 – Mar 2024</p>
          <ul>
            <li>Completed the Accenture Forage internship on Data Analytics and Visualization.</li>
            <li>Built analytical models, led data interpretation, drove insights, conceptualized visualizations, and learned to support business decisions.</li>
          </ul>
        </div>
        <div className="experience-box">
          <h3>JAVA Software Developer Intern - Infosys Springboard</h3>
          <p><strong>Duration:</strong> Nov 2024 - Dec 2024</p>
          <ul>
            <li>Developed the "Smart Logistics" application using Spring Boot, React, Workbench, and Maven.</li>
          </ul>
        </div>
        <div className="experience-box">
          <h3>Data Analytics Intern - TechnoHacks</h3>
          <p><strong>Duration:</strong> Mar 2024 - Apr 2024</p>
          <ul>
            <li>Built data pipelines and designed dashboards for impactful projects.</li>
          </ul>
        </div>
      </section>
      <CertificationSection />

      <section id="publications" className="publications-section">
        <h2 className="section-title">Publications</h2>
        <div className="publication-box">
          <h3>AI OptiFlow Precision Irrigation Management System</h3>
          <p>
            Optimized irrigation practices using AI to improve water efficiency and crop yield.
          </p>
          <p><a href="https://ijirt.org/Article?manuscript=167473" target="_blank" rel="noopener noreferrer">Read Publication</a></p>
          <p><strong>Published:</strong> July 2024</p>
        </div>
      </section>
      <section id="co-curricular" className="co-curricular-section">
        <h2 className="section-title">Co-curricular Activities</h2>
        <div className="activity-box">
          <h3>First Prize in Paper Presentation, JCT College of Technology</h3>
          <p><strong>Project:</strong> AI Optiflow Precision Irrigation Management System</p>
        </div>
        <div className="activity-box">
          <h3>Third Prize in Paper Presentation, Sri Krishna College of Technology</h3>
          <p><strong>Project:</strong> SKCET-MediCare </p>
        </div>
        <div className="activity-box">
          <h3>Organized "UXpress", Front-End Designing Challenge, Sri Krishna College Of Engineering and Technology</h3>
        </div>
        <div className="activity-box">
          <h3>First Prize in Hackathon, Bannari Amman College</h3>
          <p><strong>Project:</strong> SKCET-MediCare </p>
          <p><strong>Awarded:</strong> Cash Prize</p>
        </div>
      </section>
      <PhotoSection/>
      <section id="contact" className="contact-section">
        <h2 className="section-title">Join Us</h2>
        <p>Email: tharunmohan2004@gmail.com</p>
        <p>Phone: +91-8248665969</p>
        <p>GitHub: <a href="https://github.com/Tharunkumar1611" target="_blank" rel="noopener noreferrer">Tharunkumar1611</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tharun-kumar-068658290/" target="_blank" rel="noopener noreferrer">Tharun Kumar</a></p>
      </section>
    </div>
  );
};

export default Home;
