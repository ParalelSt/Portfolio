import "./Projects.scss";

function Projects() {
  const amazon = () => {
    window.location.href = "https://amazonaronmatoic.netlify.app/";
  };

  const facebook = () => {
    window.location.href = "https://main--aronmatoic-fb-clone.netlify.app/";
  };

  return (
    <>
      <div className="container">
        <div className="projects-container">
          <a onClick={amazon} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Clone</div>
            <div className="description">
              An Amazon clone that I made using React.js, styled-components and
              Typescript
            </div>
          </a>
          <a onClick={facebook} className="project-container">
            <div className="img-container">
              <img src="./images/facebookclone.png" />
            </div>
            <div className="title">Facebook Clone</div>
            <div className="description">
              A Facebook clone made using React.js, SCSS and Typescript
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
