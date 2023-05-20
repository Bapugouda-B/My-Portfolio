import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/context/globalContext.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);

