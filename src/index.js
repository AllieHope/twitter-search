import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchApp from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  React.createElement(SearchApp),
  document.getElementById("root"),
);
registerServiceWorker();
