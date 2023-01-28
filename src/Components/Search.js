import React from "react";
import SearchCss from './Search.module.css'
export default function Search(props) {
  return (
    <div className="d-flex search-container px-5 justify-content-between position-relative">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Seach by city"
          value={props.state.city}
          onChange={props.change}
          name="city"
        />
      </div>
      <div>
        <h4 className="fw-bold">OR</h4>
      </div>
      <div className="d-flex search-inputs">
        <label htmlFor="lat" className="fw-bold mt-1">
          Lati:
        </label>
        <input type="number" className="form-control  ms-2 me-3" name="lat" onChange={props.change} value={props.state.lat}/>
        <label htmlFor="lon" className="fw-bold mt-1">
          Long:
        </label>
        <input type="number" className="form-control ms-2 " name="lon" onChange={props.change} value={props.state.lon}/>
        <button onClick={props.search} className="btn-primary p-1 ms-1 rounded-2 px-2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
        <p className={SearchCss.getCords} onClick={props.getCords} > Get coordinates <i className="fa-sharp fa-solid fa-location-dot"></i></p>
    </div>
  );
}
