import { FaReact } from "react-icons/fa6";
import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-title">
          <span>
            <h1>Junior</h1>
          </span>
          <span className="title">
            <h1>Frontend Developer</h1>
            <FaReact
              className="icon"
              size={150}
              color="linear-gradient(90deg, #00FF6A, #00B4FF)"
              style={{ fill: "url(#grad1)" }}
            ></FaReact>
            <svg width="0" height="0">
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#00FF6A", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#00B4FF", stopOpacity: 1 }}
                />
              </linearGradient>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
