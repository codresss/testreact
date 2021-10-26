import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
