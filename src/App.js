import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(()=>{

    axios({
      // url: 
    })

  }, [])



  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
    </div>
  );
}

export default App;
