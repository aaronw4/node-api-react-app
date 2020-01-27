import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Projects from './components/projects';
import ProjectsDetails from './components/projectDetails';
import './App.css';

function App() {  

  return (    
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Projects}/>
        <Route path='/:id' render={props => <ProjectsDetails/>}/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
