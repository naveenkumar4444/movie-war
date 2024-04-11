import React, { Component } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import Details from "./pages/Details";
import Search from "./pages/Search";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/" exact element={<Popular />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/search/:keyword" exact element={<Search />} />
          <Route path="/toprated" exact element={<TopRated />} />
          <Route path="/upcoming" exact element={<UpComing />} />
        </Routes>
      </div>
    );
  }
}

export default App;
