import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {


  return (
    <Router>
      <div className="wrapper">
        <header>
          <h1>Hackflix</h1>
        </header>

        <Route exact path="/" component={Catalogue}/>
        <Route exact path="/movie/:movieID" component={MovieDetails}/>

      </div>
    </Router>
  );
}

export default App;
