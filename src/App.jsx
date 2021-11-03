import { useState } from 'react';
import "./App.css";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import { CV } from './CV/CV';
import React from 'react'

const{hero,education,experience}=CV;


/*function Boton(){
  const[showEducation,setShowEducation]=useState(true);
  return(
      <><><button
      className="btn"
      onClick={() => setShowEducation(true)}
    >Education
    </button>
      <button
        className="btn"
        onClick={() => setShowEducation(false)}
      >Experience
      </button></>
      
      <div>
        {showEducation? (
          <Education education={education}/>
        ):(
          <Experience experience={experience}/>
        )
        }
      </div></>

  );
};
*/



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
      

      
    </div>
  )

    


}

export default App ;


