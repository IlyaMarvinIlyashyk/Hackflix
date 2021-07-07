import './App.css';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TVs from './Tvs';
import Trending from './Trending';
import TvDetails from './TvDetails';
import MyList from './MyList';


function App() {


  return (
    <Router>
        <Navbar />
        <Route exact path="/" component={Trending}/>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/movie/:movieID" component={MovieDetails}/>
        <Route exact path="/tv/:tvID" component={TvDetails}/>
        <Route exact path="/tv-shows" component={TVs}/>
        <Route exact path="/my-list" component={MyList}/>
    </Router>
  );
}

export default App;
