import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="d-flex justify-content-between align-items-center bg-dark px-4 py-3">
      <div className="text-light">
       <h3>Weather  <i className="fa-sharp fa-solid fa-sun"></i></h3>
        </div>
      <div className="d-flex">
        <Link className=" text-light px-3" to="/">
          <i className="h4 fa-solid fa-house "></i>
        </Link>
        <Link className=" text-light" to="/getweather">
          <i className="h4 fa-solid fa-cloud"></i>
        </Link>
      </div>
    </nav>
  );
}


