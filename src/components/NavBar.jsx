import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };
  const handle = (e, link) => {
    setActive(link);
  };

  return (
    <>
      <div className="">
        <div className="navbarContainer">
          <div className="navbar">
            <div>
              <Link to="/" onClick={(e) => handle(e, "home")}>
                <div
                  className={
                    active === "home"
                      ? "navbar__link activeLink "
                      : "navbar__link"
                  }
                >
                  <i className="bi bi-house-door "></i>
                  <p className=" m-0">Home</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/projects" onClick={(e) => handle(e, "projects")}>
                <div
                  className={
                    active === "projects"
                      ? "navbar__link activeLink"
                      : "navbar__link"
                  }
                >
                  <i className="bi bi-code-slash"></i>
                  <p className=" m-0">Projects</p>
                </div>
              </Link>
            </div>
            <div className=" navbar__link">
              <Link to="/education" onClick={(e) => handle(e, "education")}>
                <div
                  className={
                    active === "education"
                      ? "navbar__link activeLink"
                      : "navbar__link"
                  }
                >
                  <i className="bi bi-book"></i>
                  <p className=" m-0">Education</p>
                </div>
              </Link>
            </div>
            {/* <div className=" navbar__link">
              <Link to="/contact" onClick={(e) => handle(e, "contact")}>
                <div
                  className={
                    active === "contact"
                      ? "navbar__link activeLink"
                      : "navbar__link"
                  }
                >
                  <i className="bi bi-person-lines-fill navbar__link__logo"></i>
                  <p className="navbar__text m-0">Contact</p>
                </div>
              </Link>
            </div> */}
          </div>
          <div className="darkMode" onClick={toggleMode}>
            <i
              className={
                mode === "dark"
                  ? "bi bi-moon darkMode__logo"
                  : " bi bi-sun darkMode__logo"
              }
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
