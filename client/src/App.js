import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import SavedList from "./Movies/SavedList";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <div>
        <Link to='/'> MovieList</Link>
        <Link to='/movies'> Movies</Link>
      </div>

      <Switch>
        <Route path="/movies/:itemId">
          <Item items={product} />
        </Route>
        <Route path="/shop">
          <Shop items={product} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
