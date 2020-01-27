import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function ProjectsDetails() {
  const [project, setProject] = useState([]);
  const [actions, setActions] = useState([]);
  const id = window.location.pathname;
  console.log(id)

    useEffect(() => {
        function fetchData() {
            axios
                .get(`https://aw-node-api-challenge.herokuapp.com/projects/${id}`)
                .then(info => {
                    setProject(info.data);
                    setActions(info.data.actions)
                })
                .catch(err => console.log(err));            
        }
        fetchData();
    },[]);

    return (  
        <div>
            {console.log(project)}
            <div className='homeLink'>
                <Link to='/'>
                    Home
                </Link>
            </div>
            <div>
                <h1>{project.name}</h1>
                <p className='description'>Description: {project.description}</p>
                {actions.map(action => (
                    <div key={action.id} className='action'>
                        <p>Action {action.id}: {action.description}</p>
                        <p>{action.notes}</p>
                    </div>
                ))}  
            </div>           
        </div>
    
  );
}

export default ProjectsDetails;
