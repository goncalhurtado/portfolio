import React from "react";

const GoncalCard = ({ darkMode }) => {
  const linkedin = "https://www.linkedin.com/in/goncalhurtado/";
  const github = "https://github.com/goncalhurtado";
  const handle = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={`ContGoncal text${!darkMode ? "Light" : "Dark"}`}>
        <img
          src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1704319164/portfolio-Goncal/goncal_foto_de_perfil_comp_wk0inu.png"
          alt="imagen"
        />
        <div className="contInfo">
          <h1 className="contInfo__name">Gonzalo Hurtado</h1>

          <h2 className="contInfo__dev">Front End Developer</h2>
          <hr />
          <h2 className="contInfo__dev">Contact me</h2>
          <p className="m-0 mail">goncalhurtado@gmail.com</p>
          <div className="DnoneSm">
            <div className="btnContact" onClick={(e) => handle(e, github)}>
              <i className="bi bi-github"></i>
              <p className="m-0">Github</p>
            </div>
            <div className="btnContact" onClick={(e) => handle(e, linkedin)}>
              <i className="bi bi-linkedin"></i>
              <p className="m-0">Linkedin</p>
            </div>
            <div className="btnContact">
              <i className="bi bi-file-earmark-person"></i>
              <p className="m-0 ">Download Resume</p>
            </div>
          </div>
        </div>
      </div>
      <div className="DblockSm">
        <div>
          <div className="btnContact resume">
            <i className="bi bi-file-earmark-person"></i>
            <p className="m-0  ms-2">Download Resume</p>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="btnContact github" onClick={(e) => handle(e, github)}>
            <i className="bi bi-github"></i>
            <p className="m-0 ms-1">Github</p>
          </div>
          <div
            className="btnContact linkedin"
            onClick={(e) => handle(e, linkedin)}
          >
            <i className="bi bi-linkedin"></i>
            <p className="m-0 ms-2">Linkedin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoncalCard;
