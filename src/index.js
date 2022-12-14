import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import "./index.css";
import "antd/dist/antd.min.css";
import viVN from "antd/es/locale/vi_VN";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={viVN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
