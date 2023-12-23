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
            <>
              <div
                className="project col-12 col-sm-6"
                key={data.id}
                // onClick={(e) => handle(e, data.url)}
              >
                <img className="" src={data.img} alt="" />
                <h1 className="">{data.title}</h1>
                <div className="project__description">
                  <h2 className="">{data.description}</h2>
                </div>
                <p className="m-0 mt-2 mb-2">
                  {data.technologies.map((tech, index) => {
                    return (
                      <span className="me-2" key={index}>
                        {" "}
                        {tech}{" "}
                      </span>
                    );
                  })}
                </p>
                <div className="d-flex">
                  <div
                    className="btnProject"
                    onClick={(e) => handle(e, data.url)}
                  >
                    <p className="m-0">Visit</p>
                  </div>
                  <div
                    className="btnProject"
                    onClick={(e) => handle(e, data.github)}
                  >
                    <i class="bi bi-github"></i>
                    <p className="m-0">Github</p>
                  </div>
                </div>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
