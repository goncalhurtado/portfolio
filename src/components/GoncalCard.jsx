import React from "react";

const GoncalCard = () => {
  return (
    <div className="ContGoncal">
      <img src="src/assets/img/goncal.jpg" alt="imagen" />
      <div className="contInfo">
        <h1 className="contInfo__name">Gonzalo Hurtado</h1>
        <h2 className="contInfo__dev">Front End Developer</h2>
        <hr />
        <h2 className="contInfo__dev">Contact me</h2>
        <p className="m-0">goncalhurtado@gmail.com</p>
        <i className="bi bi-github"></i>
        <i className="bi bi-linkedin"></i>
        <div className="btn btn-primary">Download CV</div>
      </div>
    </div>
  );
};

export default GoncalCard;
