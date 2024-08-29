import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa6";
import { useHandleDropDown } from "../Global/utils/DropDownButton";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const name = "Aron Matoić";

  const { isOpen, toggleDropDown } = useHandleDropDown();

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
          <div className="drop-down-btn nav-item ">
            {!isOpen && (
              <FaBars
                onClick={() => toggleDropDown()}
                className={`drop-dwn`}
                size={20}
                style={{}}
              ></FaBars>
            )}
            {isOpen && (
              <FaTimes
                onClick={() => toggleDropDown()}
                className={`drop-dwn`}
                size={20}
              ></FaTimes>
            )}
          </div>
        </div>
        <div className={`drop-down-container ${isOpen ? "open" : "closed"}`}>
          <div className="empty-bar"></div>
          <div className="nav-item-container">
            <Link to={"/portfolio/"}>
              <h1>Home</h1>
            </Link>
            <Link to={"/portfolio/projects"}>
              <h1>Projects</h1>
            </Link>
            <Link to={"/portfolio/about-me"}>
              <h1>About me</h1>
            </Link>
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
