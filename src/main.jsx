import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./AppComponent.jsx";
import CoinState from "./components/CoinState";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinState>
      <AppComponent />
    </CoinState>
  </React.StrictMode>
);
