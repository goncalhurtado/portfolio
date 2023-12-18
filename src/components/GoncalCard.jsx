import React from "react";

const GoncalCard = () => {
  return (
    <div className="card p-2 goncalCard mb-2 mb-0-sm">
      <div className="row">
        <div className="col-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12 col-sm-6 col-xs-6">
          <img
            src="src/assets/img/goncal.jpg"
            alt="imagen"
            className="goncalImg m-auto"
          />
        </div>

        <div className="col-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12 col-sm-6 col-xs-6 m-auto contGoncal">
          <h1 className="textName">Gonzalo Hurtado</h1>
          <h6 className="text-secondary textDev">Web Developer</h6>
          <div className="d-flex justify-content-center gap-2">
            <div>
              <i className="bi bi-github logo"></i>
            </div>
            <div>
              <i className="bi bi-linkedin logo"></i>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <div className="btn btn-primary botoncv">Download CV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoncalCard;
