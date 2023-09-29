import React from "react";

const GoncalCard = () => {
  return (
    <div className="card p-2 goncalCard">
      <div className="row">
        <div className=" col-6 col-sm-6 col-lg-6">
          <img
            src="src/assets/img/goncal.jpg"
            alt="imagen"
            className="goncalImg m-auto"
          />
        </div>

        <div className="col-6 col-sm-6 col-lg-6 mt-3 mt-0-sm">
          <h3>Gonzalo Hurtado</h3>
          <h6 className="text-secondary">Web Developer</h6>
          <div className="d-flex justify-content-center gap-2">
            <div>
              <i className="bi bi-github logo"></i>
            </div>
            <div>
              <i className="bi bi-linkedin logo"></i>
            </div>
          </div>
          {/* <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center contLogo">
            <i className="bi bi-envelope contactLogo"></i>
          </div>
          <div className="d-flex flex-column align-items-start">
            <p className="m-0 p-0 text-secondary ms-2 contactLayer">Email</p>
            <p className="m-0 p-0 ms-2 contactEmail">gonzalomilano@gmail.com</p>
          </div>
        </div> */}
          <div className="mt-2 mb-2">
            <div className="btn btn-primary">Download CV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoncalCard;
