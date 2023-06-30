import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPH.css';
import Header from '../../Global/Header';

const ProjectPH = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`/TestDB.json`)
      .then(response => response.json())
      .then(data => {
        const project = data.find(p => p.id === Number(id));
        setProjectData(project);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <div className="main-container">
      <div className="project-container">
        <div className="project-info">
          <h1 className="project-title">{projectData.name}</h1>
          <div className="project-description">{projectData.description}</div>
          <div className="image-container">
            <img src={projectData.image} alt={projectData.name} />
          </div>
        </div>
        <div className="project-content">
        </div>
      </div>
    </div>

    </>
    
  );
};

export default ProjectPH;
