import React from "react";
import { education } from "../data/education";

const Education = ({ darkMode }) => {
  return (
    <div className={darkMode ? "card" : "cardLight"}>
      <div className="cardbody">
        <div className="d-flex flex-column">
          <div className="">
            {education.map((edu, index) => {
              return (
                <div key={index}>
                  <i className={`bi ${edu.icon}`}></i>
                  <h1 className="">{edu.title}</h1>
                  <h2 className="">{edu.institution}</h2>
                  <p className="">{/* Status: <b>{edu.status}</b> */}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
