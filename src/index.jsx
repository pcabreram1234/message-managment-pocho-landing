import React from "react";
import App from "./routes/App.jsx";
import ReactDOM from "react-dom/client";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/antd/dist/reset.css";
import { ConfigProvider } from "antd";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
