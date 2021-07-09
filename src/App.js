import './App.scss';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TVs from './components/Tvs';
import Trending from './components/Trending';
import TvDetails from './components/TvDetails';
import MyList from './components/MyList';

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
