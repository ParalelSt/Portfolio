import { Link } from "react-router-dom";
import "./Projects.scss";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="projects-container">
          <Link to={""} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Copy</div>
            <div className="description">
              Lorem, ipsum da dolor sit amet consectetur adipisicing elit.
              Aliquid amet quas magnam error doloremque quae illum id. Nisi
              doloribus molestiae enim non magnam iste dolore voluptate illum.
              Omnis, magnam cupiditate.
            </div>
          </Link>

          <Link to={""} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Copy</div>
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              amet quas magnam error doloremque quae illum id. Nisi doloribus
              molestiae enim non magnam iste dolore voluptate illum. Omnis,
              magnam cupiditate.
            </div>
          </Link>

          <Link to={""} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Copy</div>
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              amet quas magnam error doloremque quae illum id. Nisi doloribus
              molestiae enim non magnam iste dolore voluptate illum. Omnis,
              magnam cupiditate.
            </div>
          </Link>

          <Link to={""} className="project-container">
            <div className="img-container">
              <img src="./images/amazontypescript.png" />
            </div>
            <div className="title">Amazon Copy</div>
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              amet quas magnam error doloremque quae illum id. Nisi doloribus
              molestiae enim non magnam iste dolore voluptate illum. Omnis,
              magnam cupiditate.
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
