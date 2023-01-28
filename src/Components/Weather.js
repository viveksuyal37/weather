import { Component } from "react";
import Result from "./Result";
import Search from "./Search";
import axios from "axios";
import Recent from "./Recent";
export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lon: "",
      city: "",
      data: null,
      msg: null,
      isSearched: false,
      recent:[]
    };
  }


addToRecent =(city)=>{
const recent = this.state.recent;
if(recent.length > 5){
  recent.shift();
  recent.push(city);
  localStorage.setItem('cities',JSON.stringify(recent));
}else{
  recent.push(city);
  localStorage.setItem('cities',JSON.stringify(recent));
}
}

  changeHandler = (e) => {
    let value = e.target.name;

    if (value === "city") {
      this.setState({ city: e.target.value });
    } else if (value === "lat") {
      this.setState({ lat: e.target.value });
    } else {
      this.setState({ lon: e.target.value });
    }
  };

  getCoordinatesHandler = (e) => {
    //settimeout to fake that everytime user is getting location whenever he taps icon.
    this.setState({ lat: "", lon: "" , city:""});
    setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            lon: position.coords.longitude,
            lat: position.coords.latitude,
          });
        }, function(error){
          alert(error.message);
     }, {
          enableHighAccuracy: true
               ,timeout : 5000
     });
      } else {
        this.setState({ msg: "Location is not supported by this browser." });
      }
    }, 300);
  };

  searchHandler = (e) => {
    this.setState({data:null, isSearched:true});

    if (this.state.city !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&limit=5&appid=a6ae94e4a326c6366a942a0ef0f0cedf&units=metric`
        )
        .then((res) => {
          this.setState({
            data: res.data,
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
          }, this.addToRecent(res.data.name));
        })
        .catch((err) => {
          console.log(err);
          this.setState({ msg: err.response.data.message });
        });
    } else if (this.state.lat !== "" && this.state.lon !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=a6ae94e4a326c6366a942a0ef0f0cedf&units=metric`
        )
        .then((res) => {
          this.setState({
            data: res.data,
            city: res.data.name,
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
          },this.addToRecent(res.data.name));
        
        })
        .catch((err) => { 
          this.setState({ msg: err.response.data.message });
        });
    }
  };

  recentSearchHandler =(city)=>{
    axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=a6ae94e4a326c6366a942a0ef0f0cedf&units=metric`
    )
    .then((res) => {
      this.setState({
        data: res.data,
        lat: res.data.coord.lat,
        lon: res.data.coord.lon,
        city:res.data.name
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({ msg: err.response.data.message });
    });

  }

componentDidMount=()=>{
const localSavedCities = localStorage.getItem('cities');
if(localSavedCities){
  this.setState({recent:JSON.parse(localSavedCities)})
}
}

  render() {
    return (
      <>
      <Recent  recentSearch={this.recentSearchHandler} recent={this.state.recent}/>
        <Search
         
          change={this.changeHandler}
          state={this.state}
          search={this.searchHandler}
          getCords={this.getCoordinatesHandler}
        />
        <Result isSearched={this.state.isSearched} data={this.state.data} msg={this.state.msg} />
      </>
    );
  }
}
