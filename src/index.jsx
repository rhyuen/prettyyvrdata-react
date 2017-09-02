import React, {Component} from "react";
import {render} from "react-dom";
import App from "./app.jsx";

let state = {};

render(
    <App/>, 
    document.getElementById("app")
);