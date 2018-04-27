import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";
import API from "./utils/API";
import './App.css';

const App = () => (
  <div>
  	<Jumbotron />
    <Results />
    <Saved />
    <Search />
  </div>
);

export default App;
