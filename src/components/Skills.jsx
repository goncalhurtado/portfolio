import React from "react";
import { frontEndSkills, backEndSkills, otherTools } from "../data/skills";

const Skills = ({ darkMode }) => {
  return (
    <>
      <>
        <h1 className="text-start mb-3">Skills</h1>
      </>
      <div className="skillCont">
        <h2 className="text-start">Front-End</h2>
        <div className="skills">
          {frontEndSkills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p className="skillName">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skillCont">
        <h2 className="text-start">Back-End</h2>
        <div className="skills">
          {backEndSkills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p className="skillName">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skillCont">
        <h2 className="text-start">Other Tools</h2>
        <div className="skills">
          {otherTools.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />

              <p className="skillName">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
