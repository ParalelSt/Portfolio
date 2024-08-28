import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./Global/GlobalStyles.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </StrictMode>
);
