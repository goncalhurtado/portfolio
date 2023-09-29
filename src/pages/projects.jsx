import React from "react";
import { projectsData } from "../data/projects";
const Projects = () => {
  const handle = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="card p-3">
        <div className="row">
          {projectsData.map((data) => {
            return (
              <div
                className="card col-sm-6 col-12  mb-4 p-1 "
                key={data.id}
                onClick={(e) => handle(e, data.url)}
              >
                <div className="">
                  <h5 className="card-title text-white tituloProject">
                    {data.title}
                  </h5>
                  <img
                    className="card-img cursorProject"
                    src={data.img}
                    alt="asd"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">{data.description}</p>
                </div>

                <div className="d-flex justify-content-center">
                  {data.technologies.map((tech) => {
                    return (
                      <img
                        className="projectTech"
                        key={tech}
                        src={tech}
                        alt="technology"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
