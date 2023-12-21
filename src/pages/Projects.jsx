import React from "react";
import { projectsData } from "../data/projects";
const Projects = ({ darkMode }) => {
  const handle = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className={darkMode ? "card" : "cardLight"}>
      <div className="cardbody row">
        {projectsData.map((data) => {
          return (
            <div
              className="col-12 col-sm-6"
              key={data.id}
              onClick={(e) => handle(e, data.url)}
            >
              <div className="">
                <h5 className="">{data.title}</h5>
                <img
                  className="projectImg cursorProject"
                  src={data.img}
                  alt="asd"
                />
              </div>
              <div className="">
                <p className="">{data.description}</p>
              </div>

              <div className="">
                {/* {data.technologies.map((tech) => {
                    return (
                      <img
                        className="projectTech"
                        key={tech}
                        src={tech}
                        alt="technology"
                      />
                    );
                  })} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
