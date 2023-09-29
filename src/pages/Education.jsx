import React from "react";

const Education = () => {
  return (
    <div className="card ">
      <div className="row p-4">
        <div className="col-6 d-flex align-items-center justify-content-center text-start">
          <div className="d-flex flex-column align-items-start">
            <i className="bi bi-journal-code fs-4 educationLogo"></i>
            <h5 className="m-0 p-0">Full Stack Developer - MERN Stack</h5>
            <p className="m-0 p-0">Rolling Code School</p>
            <div className="d-flex">
              <p className="m-0 p-0 me-2">Status:</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center text-start">
          <div className="d-flex flex-column align-items-start">
            <i className="bi bi-universal-access-circle fs-4 educationLogo"></i>
            <h5 className="m-0 p-0">Introduction to Web Accessibility</h5>
            <p className="m-0 p-0">The World Wide Web Consortium (W3C)</p>
            <div className="d-flex">
              <p className="m-0 p-0 me-2">Status:</p>
              <p>In Progress</p>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex text-start mt-4 ">
          <div className="d-flex flex-column align-items-start">
            <i className="bi bi-speaker fs-4 educationLogo"></i>
            <h5 className="m-0 p-0">Music Production</h5>
            <p className="m-0 p-0">EMC Berklee (BIN)</p>
            <div className="d-flex">
              <p className="m-0 p-0 me-2">Status:</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
