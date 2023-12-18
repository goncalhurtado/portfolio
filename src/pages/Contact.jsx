import React from "react";

const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="d-flex flex-column justify-content-center p-3">
          <h4 className="">Connect with me today</h4>
          <div className=" d-flex  justify-content-center ">
            <a
              className="d-flex contact btn btn-primary contactSizeBtn"
              href="mailto:gonzalomilano@gmail.com"
            >
              <div className="me-1">Email:</div>
              <div className=" ">gonzalomilano@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
