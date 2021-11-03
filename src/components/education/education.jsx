import React from "react";
import "./education.css"

const Education= ({education})=>{
    return(
        <div className="education-content">
            <div className="education-card">
                {education.map((item)=>{
                    return(
                        <div key={JSON.stringify(item)}>
                            <p className='name'>📚{item.name}</p>
                            <p >{item.where}</p>
                            <p>{item.date}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;