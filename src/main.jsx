import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './i18n';
import "./index.css";
import { ProjectsProvider } from "../context/ProjectsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
