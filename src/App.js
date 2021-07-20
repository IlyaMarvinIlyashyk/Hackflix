import './App.scss';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TVs from './components/Tvs';
import Trending from './components/Trending';
import TvDetails from './components/TvDetails';
import MyList from './components/MyList';
import { useEffect, useState } from 'react';
import firebase from './firebase';

function App() {

  const [userList, setUserList] = useState([])

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const List = [];

      const data = response.val();
      
      for (let key in data) {
        const listObject = {
          key: key,
          id: data[key].id,
          poster: data[key].poster_path,
          title: data[key].original_title,
          tv: data[key].first_air_date
        }
        List.push(listObject)
      }
      setUserList(List)
    })

  }, [])

  
  return (
    <Router>
        <Navbar />
        <Route 
        exact path="/" component={Trending}/>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/movie/:movieID" render={(props)=> <MovieDetails {...props} movieList={userList}/> } />
        <Route exact path="/tv/:tvID" render={(props)=> <TvDetails {...props}tvList={userList} />}/>
        <Route exact path="/tv-shows" component={TVs}/>
        <Route exact path="/my-list" render={()=> <MyList userList={userList}/> } />
    </Router>
  );
}

export default App;
