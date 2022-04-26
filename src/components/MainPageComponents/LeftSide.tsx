import React from "react";
import { Link } from "react-router-dom";

import './css/LeftSide.css'

const LeftSide = () => {
	let id = 1;
  return (
    <div className="main-left-side">
      <ul className="left-menu">
        <Link to={`/id/${id}`}>
          <li className="menu-element">profile</li>
        </Link>
        <Link to="/feed">
          <li className="menu-element">news</li>
        </Link>
        <Link to="/messages">
          <li className="menu-element">chats</li>
        </Link>
        <Link to="/music">
          <li className="menu-element">music</li>
        </Link>
        <Link to="/groops">
          <li className="menu-element">groops</li>
        </Link>
      </ul>
    </div>
  );
};

export default LeftSide;
