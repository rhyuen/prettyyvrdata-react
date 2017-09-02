import React, {Component} from "react";

const style = {
    display: "flex",
    backgroundColor: "pink",
    justifyContent: "center"
};

const Nav = () => (
    <div className = "nav" style = {style}>
        <span><a href = "/">Pretty YVR DATA</a></span>        
    </div>
);

export default Nav;