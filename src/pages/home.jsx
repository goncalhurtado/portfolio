import React from "react";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h3 className="text-center text-sm-start">Hi, Im Gonzalo</h3>
          <div className="">
            <p className="text-start m-0 mb-1">
              I'm 24 years old Full-Stack developer based in Buenos Aires.
            </p>
            <p className="text-start m-0 mb-1">
              Because of my strong background in music production studies, I
              approach problem-solving with a creative perspective.
            </p>
            <p className="text-start m-0 mb-1">
              I always prioritize web accessibility to ensure that{" "}
              <b>all users can enjoy the digital experiences</b> I create. 🙌
            </p>
            <p className="text-start m-0 mb-1">
              In my free time, I enjoy playing the piano and watching 'The
              Office'.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-center text-sm-start mt-2">Skills</h4>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
