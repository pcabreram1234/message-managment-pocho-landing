import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { handleInitConfig } from "./boot/initConfig.js";
import ScrollToSection from "./hooks/ScrollToSection.js";
import "../node_modules/antd/dist/antd.css";
import "../node_modules/aos/dist/aos.css";
import "./styles/App.css";
handleInitConfig();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToSection />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
