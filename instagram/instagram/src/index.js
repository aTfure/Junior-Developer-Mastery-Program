import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { db, analytics, FieldValue, auth } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ db, analytics, FieldValue, auth }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);