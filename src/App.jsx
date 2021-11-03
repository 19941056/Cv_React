import { useState } from 'react';
import "./App.css";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import More from "./components/more/more";
import { CV } from './CV/CV';
import React from 'react'

const{hero,education,experience,languages,habilities}=CV;






const App = () => {
  const[showEducation,setShowEducation]=useState(true);
  return (
    <div className='App'>
      <Hero hero={hero}/>
      <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
      />
      

      
    </div>
  )

    


}

export default App ;


