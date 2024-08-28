import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const name = "Aron Matoić";

  return (
    <nav>
      <div className="nav-container">
        <div className="left-nav">
          <div className="nav-item">
            <h1>{name.toUpperCase()}</h1>
          </div>
        </div>
        <div className="right-nav">
          <div className="nav-item">
            <Link to={"/portfolio/"}>
              <h1>Home</h1>
            </Link>
          </div>
          <div className="nav-item">
            <Link to={"/portfolio/projects"}>
              <h1>Projects</h1>
            </Link>
          </div>
          <div className="nav-item">
            <Link to={"/portfolio/about-me"}>
              <h1>About me</h1>
            </Link>
          </div>
          <div className="nav-item">
            <Link to={"/portfolio/contact"}>
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
