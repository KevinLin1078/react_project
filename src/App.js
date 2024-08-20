// import React from 'react' # older version before 18
import logo from './logo.svg';
import './App.css';

import Navbar from './jobsite/Navbar/Navbar';
import DetailBar from './jobsite/DetailBar/DetailBar'

function App() {
  const title = "Home"
  const likes = [2,'https://google.com']
  const person = {'name': 'Kevin'}  // cannot be displayed in {}
  const bool = true                 // cannot be displayed in {}
  return (
    
    
    
    <div className="main-container">
        <nav className='top-panel'>
          <Navbar></Navbar>
        </nav>

        <div className='left-panel'>
          <DetailBar></DetailBar>
        </div>

        <div className='right-panel'>
          <DetailBar></DetailBar>
        </div>
        
    </div>


  );
}

export default App;
