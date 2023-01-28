import React, { Component } from "react";
import Loader from './Loader';

export default class Result extends Component {
  render() {
    let { data, msg, isSearched } = this.props;
    let showItem;
    let Sun = (ms) => {
      // *1000 coz this api gives time in secs
      let d = new Date(ms * 1000);
      return d.toLocaleTimeString();
    };

    if (data) {
      showItem = (
        <div className="w-75 result-container">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">
                  <img className="d-inline"
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="WeatherIcon"
                  />
                  <h5 className="me-3">{data.main.temp} &deg;C</h5>
                  <h2 className="d-inline me-3">{data.name}</h2>
                  <h5 className="d-inline">{data.weather[0].main}</h5>
                </th>
              </tr>
              <tr>
                <th scope="row">Country</th>
                <td>{data.sys.country}</td>
              </tr>
              <tr>
                <th scope="row">Lat/Long</th>
                <td>
                  {data.coord.lat}/ {data.coord.lon}
                </td>
              </tr>
              <tr>
                <th scope="row">Max temp</th>

                <td>{data.main.temp_max} &deg;C</td>
              </tr>

              <tr>
                <th scope="row">Min temp</th>

                <td>{data.main.temp_min} &deg;C</td>
              </tr>
              <tr>
                <th scope="row">Sunrise</th>

                <td>{Sun(data.sys.sunrise)}</td>
              </tr>
              <tr>
                <th scope="row">Sunset</th>

                <td>{Sun(data.sys.sunset)}</td>
              </tr>
              <tr>
                <th scope="row">Wind</th>

                <td>{data.wind.speed} Km/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (msg) {
      showItem = <h2 className=" text-center pt-5">{msg}</h2>;
    } else {
      (isSearched)
      ? 
      showItem = <Loader/>
      : showItem = <h2 className=" text-center pt-5">Please search a city..</h2>;
     
    }

    return <>{showItem}</>;
  }
}
