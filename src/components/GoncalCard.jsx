import React from "react";

const GoncalCard = ({ darkMode }) => {
  return (
    <div className={`ContGoncal text${!darkMode ? "Light" : "Dark"}`}>
      <img
        src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1702944689/portfolio-Goncal/perfil_slack_kawow7.jpg"
        alt="imagen"
      />
      <div className="contInfo">
        <h1 className={darkMode ? "contInfo__name" : "contInfo__nameLight"}>
          Gonzalo Hurtado
        </h1>
        <h2 className="contInfo__dev">Front End Developer</h2>
        <hr />
        <h2 className="contInfo__dev">Contact me</h2>
        <p className="m-0 mail">goncalhurtado@gmail.com</p>
        <div className="btnContact">
          <i className="bi bi-github"></i>
          <p className="m-0">Github</p>
        </div>
        <div className="btnContact">
          <i className="bi bi-linkedin"></i>
          <p className="m-0">Linkedin</p>
        </div>
        <div className="btnContact">
          <i className="bi bi-file-earmark-person"></i>
          <p className="m-0 ">Resume</p>
        </div>
      </div>
    </div>
  );
};

export default GoncalCard;
