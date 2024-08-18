import React from 'react';
import './Projects.css';

// Importing logo images
import csharpLogo from '../logo/csharp-logo.png';
import cppLogo from '../logo/cpp-logo.png';
import cssLogo from '../logo/css-logo.png';
import htmlLogo from '../logo/html-logo.png';
import jsLogo from '../logo/js-logo.png';
import pythonLogo from '../logo/python-logo.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="card-container">
        <div className="card card1">
          <img src={csharpLogo} alt="C# Logo" className="card-logo" />
          <h2>C#</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="card card2">
          <img src={cppLogo} alt="C++ Logo" className="card-logo" />
          <h2>C++</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="card card3">
          <img src={cssLogo} alt="CSS Logo" className="card-logo" />
          <h2>CSS</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="card card4">
          <img src={htmlLogo} alt="HTML Logo" className="card-logo" />
          <h2>HTML</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="card card5">
          <img src={jsLogo} alt="JavaScript Logo" className="card-logo" />
          <h2>JavaScript</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="card card6">
          <img src={pythonLogo} alt="Python Logo" className="card-logo" />
          <h2>Python</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
