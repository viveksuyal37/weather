import React from 'react'
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (

          <div
      style={{ height: "80vh" }}
      className="d-flex  flex-column align-items-center justify-content-center"
    >
      <h1 className="fw-bold">
        Weather <i className="h1 d-inline fa-solid fa-cloud"></i>
      </h1>
      <p>Free realtime weather app</p>
      <h2>Error404: No such page found</h2>
      <Link className="btn-dark px-4 py-2 text-decoration-none" to="/">Back to home</Link>
    </div>
  
  )
}
