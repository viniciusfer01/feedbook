import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth-context";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFJJr973yr1338iccT9CaT0RXQOl6aG50",
  authDomain: "feedbook-c5cbe.firebaseapp.com",
  databaseURL: "https://feedbook-c5cbe-default-rtdb.firebaseio.com",
  projectId: "feedbook-c5cbe",
  storageBucket: "feedbook-c5cbe.appspot.com",
  messagingSenderId: "524611669918",
  appId: "1:524611669918:web:b23092eaffdcbe1abf508f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
