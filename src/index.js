console.log("this is just index.js");

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// // needed this import to stop the regenerator runtime error and because babel polyfill is deprecated
// import "regenerator-runtime/runtime";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

