import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { fetchMovies } from "./api/fetchMovies.js";
//need to add header and footer


//code needs fix bc reloading same data twice
const App = () => {
  const nowPlaying =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=";
  const [page, setPage] = useState(1); // set count to 1 because we start at page 1 but holds current page #
  const [movies, setMovies] = useState([]); //holds movies that have been loaded, //set movies updates movies array:)

  //new movies fetched get added to array of movies we are displaying currently, useful for loadMore and reusable
  const buildMovies = (newMovies) => {
    const existingMovies = movies.map((movie) => movie.id);
    const newMoviesToAdd = newMovies.filter((movie) => !existingMovies.includes(movie.id));
    setMovies((movies) => [...movies, ...newMoviesToAdd]);
};


  // IF U HAVE TIME FIX HOW SEARCHBAR RETURNS MOVIES INSTEAD OF QUERY FOR LOADING MOE THAN ONE PAGE
  //milestones done :1,2 ish,3 ish, 6
  // left 4,5, 7, 8 all stretches which arent hard at all:)

  //render when page is rendered, [] makes it run once
  useEffect(() => {
    fetchMovies(page, nowPlaying)
      .then((data) => {
        //get movies
        if (page === 1) {
          //if first render set movis to first 20
          setMovies(data.results);
        } else {
          buildMovies(data.results); //add more movies on to movielist
        }
      })
      .catch((error) => {
        console.error(error); //throw an error for debug
      });
  }, [page]);

  //calls the fetch again forthe page based on the count of loads
  const loadMoreMovies = () => {
    setPage((page) => page + 1); //page isnt updated until re render so just add 1
  };

  return (
    <div className="App">
      <Header
        sendToApp={(data) => {
          setMovies([]);
          buildMovies(data.results); // clears the movies and then appends the new ones whether nowplaying or the search query
        }}
      />
      <MovieList movies={movies} />
      {/* Renders movies using movielist grid and movie cards*/}
      <button className="load-more" onClick={loadMoreMovies}>Load More</button> {/* Loadmore button*/}
      <Footer/>
    </div>
  );
};

export default App;
