import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [actions, setActions] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    function fetchData() {
      axios
        .get('https://aw-node-api-challenge.herokuapp.com/projects')
        .then(info => setProjects(info.data))
        .catch(err => console.log(err))
    }
    fetchData();
  },[]);

  function fetchActions(id) {
    axios
        .get(`https://aw-node-api-challenge.herokuapp.com/actions`)
        .then(info =>{
            console.log(info.data)
            let data = info.data.filter(info => info.project_id === id);
            setActions(data);
            setDisplay(!display);
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="App">
        {console.log(actions)}
      <div className='title'>
        <h1>Projects</h1>
      </div>
      <div className='projects'>
        {projects.map(project => (
          <div key={project.id} className='project'>
            <h3 onClick={() => fetchActions(project.id)}>{project.name}</h3>
            <p>{project.description}</p> 
            {actions.map(actions => (
                actions.project_id === project.id ? 
                <div className='actions'>
                    <h4>{actions.description}</h4>
                    <p>{actions.notes}</p>
                </div> : null
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
