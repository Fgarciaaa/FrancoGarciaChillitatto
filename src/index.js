import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initFirebase } from "./services/product.service";

initFirebase();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
