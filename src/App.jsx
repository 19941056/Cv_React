//import { useState } from 'react';
import "./App.css";
import Hero from "./components/hero/hero";
//import Education from "./components/education/education";
import { CV } from './CV/CV';
import React from 'react'
//<Education education={education}/>
const{hero}=CV;

const App = () => {
  return (
    <div className='App'>
      <Hero hero={hero}/>
      
      

      
    </div>
  )
}

export default App


