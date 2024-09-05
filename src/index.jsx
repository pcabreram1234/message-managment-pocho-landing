import React from "react";
import App from "./routes/App.jsx";
import ReactDOM from "react-dom/client";
import "../node_modules/antd/dist/antd.css";
import "../node_modules/aos/dist/aos.css";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
