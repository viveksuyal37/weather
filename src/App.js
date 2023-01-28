import { Component } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/getweather" element={<Weather />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
