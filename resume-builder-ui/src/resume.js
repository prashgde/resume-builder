import React, { Component } from 'react';
import './App.css';
import ResumeHeader from './resumeheader';
import ResumeBody from './resumebody'
import ResumeFooter from './resumefooter';

class Resume extends Component {
  render() {
    return (
      <div className="background">
        <div className="resume">
            <ResumeHeader />
            <br></br>
            <ResumeBody  />
            <ResumeFooter/>
        </div>
      </div>
    );
  }
}

export default Resume;