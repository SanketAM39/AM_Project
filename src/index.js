import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosInterceptor } from "./services/HttpService";

 axiosInterceptor();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
