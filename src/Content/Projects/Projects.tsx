import { Link } from "react-router-dom";
import "./Projects.scss";

function Projects() {
  const redirect = () => {
    window.location.href = "https://amazonaronmatoic.netlify.app/";
  };

  return (
    <>
      <div className="container">
        <div className="projects-container">
          <Link onClick={redirect} to={""} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Clone</div>
            <div className="description">
              An Amazon clone that I made using React.js, styled-components and
              Typescript
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
