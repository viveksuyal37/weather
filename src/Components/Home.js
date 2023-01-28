import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      style={{ 
        height: "100vh",
        position:"absolute",
        top:"0",
        width:"100%"
       }}
      className="d-flex  flex-column align-items-center justify-content-center"
    >
      <h1 className="fw-bold">
      Weather <i className="h1 d-inline fa-solid fa-cloud"></i>
      </h1>
      <p>Free realtime weather app</p>
      <Link className="btn-dark px-4 py-2 text-decoration-none" to="/getweather">Explore</Link>
    </div>
  );
}
