import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <h5>Front-End</h5>
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex gap-4">
            <div>
              <img src="https://skillicons.dev/icons?i=html" />
              <p className="">HTML</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=css" alt="" />
              <p className="">CSS3</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=js" alt="" />
              <p className="">Javascript</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=react" alt="" />
              <p className="">ReactJs</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="" />
              <p className="">Bootstrap</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=materialui" alt="" />
              <p className="">MaterialUi</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=sass" alt="" />
              <p className="">Sass</p>
            </div>
          </div>
        </div>
        <h5>Back-End</h5>
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex gap-4">
            <div>
              <img src="https://skillicons.dev/icons?i=mongodb" />
              <p className="">MongoDB</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=express" alt="" />
              <p className="">Express</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
              <p className="">NodeJs</p>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=postman" alt="" />
              <p className="">Postman</p>
            </div>
          </div>
        </div>
        <h5>Other Tools</h5>
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex gap-4">
            <div>
              <img src="https://skillicons.dev/icons?i=git" />
              <p className="">GIT</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                alt=""
                className="icon-size"
              />
              <p className="">Slack</p>
            </div>
            <div>
              <img
                src="https://seeklogo.com/images/B/brain-logo-085FB58CDA-seeklogo.com.png"
                alt=""
                className="icon-size"
              />
              <p className="">Scrum</p>
            </div>
            <div>
              <img
                src="https://ta-relay-public-files-prod.s3.us-east-2.amazonaws.com/icp/product_images/3a394bb55114981d18c5d0e54786b641.png"
                alt=""
                className="icon-size"
              />
              <p className="">Trello</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1024px-United-kingdom_flag_icon_round.svg.png"
                alt=""
                className="icon-size"
              />
              <p className="">Ingles</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
