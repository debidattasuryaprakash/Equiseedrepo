import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="NavBar-Wrapper">
      <div></div>
      <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link fa fa-home"></Link>
        <Link to="/add" className="NavBar-Link fa fa-plus"></Link>
      </div>
    </nav>
  );
};

export default Home;
