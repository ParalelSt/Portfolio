import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Content/Home/Home";
import Projects from "./Content/Projects/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/about-me"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
