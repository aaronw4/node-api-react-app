import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get('https://aw-node-api-challenge.herokuapp.com/projects')
        .then(info => setProjects(info.data))
        .catch(err => console.log(err))
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      {console.log(projects)}
      <div className='title'>
        <h1>Projects</h1>
      </div>
      <div className='projects'>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
