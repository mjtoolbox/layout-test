import React from 'react';
import './../App.css';
import libraryImage from './../contemporarylib.jpg';

class Programs extends React.Component {
  render() {
    return (
      <div className='App' style={{ backgroundImage: `url(${libraryImage})` }}>
        <div className='App-content'>
          <h1>Program</h1>
          <p>They are good</p>
        </div>
      </div>
    );
  }
}

export default Programs;
