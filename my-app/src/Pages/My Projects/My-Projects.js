import React, { useState, useEffect } from 'react';
import Header from '../../Global/Header';
import { Link } from 'react-router-dom';
import './My-Projects.css';

const MyProjects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch('/TestDB.json')
      .then(response => response.json())
      .then(data => setProjectList(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul className="project-list">
          {projectList.map(project => (
            <li key={project.id}>
              <div className="project-item">
                <div className="project-details">
                  <div className="project-inner-container">
                    <div>
                      <h2>
                        <Link to={`/ProjectPH/${project.id}`}>{project.name}</Link>
                      </h2>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyProjects;
