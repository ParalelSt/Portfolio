import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./Global/GlobalStyles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/portfolio/">
      <App />
    </Router>
  </StrictMode>
);
