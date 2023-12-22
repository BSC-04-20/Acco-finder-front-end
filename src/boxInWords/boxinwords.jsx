import React from 'react';
import './boxwords.css';
import { useHistory } from 'react-router-dom';

function BoxInWords() {
  return (
    <div className='boxMain'>
      <div className='box1 firstBox'>
        <div className='heading'>Find a home</div>
        <p className='paragraph'>Single, double, triple lodging spaces available.</p>
      </div>
      <div className='box1'>
        <div className='heading'>Add Hostel</div>
        <p className='paragraph'>
          Just add your hostel. Accofinder will do the marketing.
        </p>
      </div>

      <div className='box1 lastBox'>
        <div className='heading'>Login here</div>
        <p className='paragraph'>
          Create an account with Accofinder to book or upload your lodging space.
        </p>
      </div>
    </div>
  );
}

export default BoxInWords;
