import React from "react";
import "./more.css";

const More= ({languages, habilities})=>{
    return(
   <><div className="more">
        <div className="divider">
            <span></span>
            <span>Languages</span>
            <span></span>
        </div>
        <div className="card-languages">
        <p>{languages.language}</p>
        <p> Oral level: {languages.splevel}</p>
        </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
        <div className="habilities-card">
            {habilities.map((element)=>(
                <p>💻 {element}</p>
            )
                
            )}
        </div>
    </div>
        </>
    
    )

}
export default More;