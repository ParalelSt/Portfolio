import "./AboutMe.scss";

function AboutMe() {
  return (
    <>
      <div className="container">
        <div className="left-section">
          <div className="img-container">
            <img src="/images/ProfilePic.jpg" />
          </div>
        </div>
        <div className="right-section">
          <div className="title-container">
            <h1>I am Aron, a Junior Frontend Developer</h1>
          </div>
          <div className="section-container">
            <span>
              I am a 19 year old Web Developer with a focus on creating
              responsive and dynamic websites using React, SCSS and Typescript.{" "}
              {""}
              Lately I've been slowly getting into learning backend as well. For
              my database I use PostgreSQL, for building my server-side
              applications I use NestJS and TypeORM. {""}
              In my spare time I play guitar and go to the gym.
            </span>
          </div>
          <div className="bottom-container">
            <div className="education-section">
              <div className="title">
                <h2>
                  Education:{" "}
                  <span>
                    Mechanical Engineering at Secondary school "Ivan Seljanec"
                    Križevci
                  </span>
                </h2>
              </div>
              <div className="info-section">
                <span>From: September 2020</span> &nbsp;
                <span>To: May 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
