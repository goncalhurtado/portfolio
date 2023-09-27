import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-end">
          <div className="d-flex">
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <div>Ligth</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
