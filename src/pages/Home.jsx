import React, { useState } from "react";
import Skills from "../components/Skills";
import GoncalCard from "../components/GoncalCard";

const Home = ({ darkMode }) => {
  const [joke, setJoke] = useState(false);
  const handleJoke = () => handleJoke(!joke);
  return (
    <div className={darkMode ? "card" : "cardLight"}>
      <div className="cardbody">
        <div className="col-12 col-sm-3 DblockSm">
          <GoncalCard darkMode={darkMode} />
        </div>
        <div>
          <h1 className="">Hi, Im Goncal</h1>
          <div className="textHome">
            <p className="textHome__main pImportant">
              I'm 25 years old <u>Full-Stack developer</u> based in Buenos
              Aires.
            </p>
            <p className="textHome__desc">
              Because of my strong background in music production studies, I
              approach problem-solving with a creative perspective.
            </p>
            <p className="textHome__desc">
              I always prioritize web accessibility to ensure that{" "}
              <b>all users can enjoy the digital experiences</b> I create{" :)"}
            </p>
            <p className="textHome__desc">
              In my free time, I enjoy playing the piano and watching
              <span
                onMouseOver={() => setJoke(true)}
                onMouseOut={() => setJoke(false)}
              >
                {" "}
                'The Office'.{" "}
                {joke && (
                  <img
                    src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1703297275/portfolio-Goncal/b7d082b9f9d780adb1b6d42ed621e676_wqfytc.png"
                    alt="Michael Scott"
                    className="joke"
                  />
                )}
              </span>
            </p>
          </div>
        </div>
        <div className="separadorTop">
          <Skills darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
