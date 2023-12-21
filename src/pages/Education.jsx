import React from "react";

const Education = ({ darkMode }) => {
  return (
    <div className={darkMode ? "card" : "cardLight"}>
      <div className="cardbody">
        <div className="row">
          <div className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            nihil dignissimos, aut reprehenderit culpa soluta itaque ad nemo
            quis fugiat quas officiis iure.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
