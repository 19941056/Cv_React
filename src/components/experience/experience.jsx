import React from "react";
import "./experience.css";

const Experience=({experience})=>{
    return(
        <div className="experience-container">
            <div className="experience-card">
                {experience.map((item)=>{
                    return(
                        <div key={JSON.stringify(item)}>
                        <p className="name">⚙️{item.name}</p>
                        <p>{item.date}</p>
                        <p>{item.where}</p>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;