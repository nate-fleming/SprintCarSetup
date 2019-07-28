import React from "react";
import ReactDOM from "react-dom";
import SprintCarSetup from './SprintCarSetup'
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import * as firebase from 'firebase/app'
import keys from './keys'
import "./index.css";

// Firebase SDK
var firebaseConfig = {
  apiKey: keys.firebaseKey,
  authDomain: "sprintcarsetup-7a299.firebaseapp.com",
  databaseURL: "https://sprintcarsetup-7a299.firebaseio.com",
  projectId: "sprintcarsetup-7a299",
  storageBucket: "sprintcarsetup-7a299.appspot.com",
  messagingSenderId: "643760824010",
  appId: "1:643760824010:web:313fdaf4c9eb3f1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Router>
    <SprintCarSetup />
  </Router>,
  document.getElementById("root")
);

