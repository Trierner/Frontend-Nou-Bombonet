import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {

  
    const mainStyles = {
      display: 'flex',
    }

    const appStyles = {
      padding: '10px',
      width: '100%'
    }
  

  return (
    <Router>
      <main style={mainStyles}>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div style={appStyles}>
          <Dashboard />
        </div>
      </main>
    </Router>
  );
}

export default App;
