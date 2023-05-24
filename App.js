import React from 'react';
import './App.css';
import ramlal from "./Assets/humbers.png";
import image from "./Assets/taj.png"

function App() {
  return (
    <>
    <div className='navbar'>
      <nav>
        <div className='mylogo'>
          <img src={ramlal} alt="Logo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/project">Project</a></li>
        </ul>
      </nav>
    </div>
    <div className='bodyimage'>
     <img src={image} alt='bodylogo' />
    </div>
    <div className='footer'>
    <p>Copyright © 2021 Humbers Group. All rights reserved.</p>

    </div>
    </>
  );
}

export default App;