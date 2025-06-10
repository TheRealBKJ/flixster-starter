import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import { useState } from "react";
import { useEffect } from "react";
import { fetchMovies } from "./api/fetchMovies.js";

const App = () => {
  const [page, setPage] = useState(1); // set count to 1 because we start at page 1 but holds current page #
  const [movies,setMovies] = useState([]) //holds movies that have been loaded

  
  //new movies fetched get added to array of movies we are displaying currently, useful for loadMore and reusable
  const buildMovies= (newMovies) =>{
    setMovies(previous => [...previous,...newMovies]);
  };

  //render when page is rendered, [] makes it run once
  useEffect(() => {
    console.log('fetching for',page);
    fetchMovies(page).then((data) =>{
      buildMovies(data.results);
    }).catch(error =>{
      console.error('app', error);
    });
  }, [page]);

  //calls the fetch again forthe page based on the count of loads
  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);//page isnt updated until re render so just add 1
  }

  return (
    <div className="App">
      <h1>Flixster</h1>
      <MovieList movies={movies} /> {/* Renders movies using movielist grid and movie cards*/}
      <button onClick = {loadMoreMovies}>Load More</button> {/* Loadmore button*/}
    </div>
  );
};

export default App;
