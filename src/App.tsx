import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Content/Home/Home";
import Projects from "./Content/Projects/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/portfolio/" element={<Home></Home>}></Route>
        <Route
          path="/portfolio/projects"
          element={<Projects></Projects>}
        ></Route>
        <Route path="/portfolio/about-me"></Route>
        <Route path="/portfolio/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
