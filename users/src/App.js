import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Projects from './components/projects'
import './App.css';

function App() {  

  return (    
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Projects}/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
