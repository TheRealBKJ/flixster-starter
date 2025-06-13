import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
import SortBox from "../SortBox/SortBox.jsx";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";

//renders the movies, going to use grid for this
const MovieList = ({ movies }) => {
    const [sortedMovies, setSortedMovies] = useState(movies); //movies for sorted
    const [isSorted, setIsSorted] = useState(false); // so we can choose which one to use for movielist
    const [likedCards, setLikedCards] = useState([]); //add the cards that are liked to an array
    const [watchedCards, setWatchedCards] = useState([]); //add caerds that have been watched to am array

    //change to cards sorted for render
    const changeSort = (sortedData => {
        setSortedMovies(sortedData); //change sortedMovies
        setIsSorted(true);
    })

    // updates likedCards when moviecard is liked, appends on to the end
    const handleLike = (data) => {
        setLikedCards((prevLiked) => {
            if (prevLiked.some((movie) => movie.id === data.id)) {
                return prevLiked.filter((movie) => movie.id !== data.id);
            } else {
                return [...prevLiked, data];
            }
        });
    }
    //updates watched cards when moviecard is click as watched ,onto the end
    const handleWatch = (data) => {
        setWatchedCards((prevWatched) => {
            if (prevWatched.some((movie) => movie.id === data.id)) {
                return prevWatched.filter((movie) => movie.id !== data.id);
            } else {
                return [...prevWatched, data];
            }
        });
    }

    const isMovieLiked = (movie) => {
        return likedCards.some((likedMovie) => likedMovie.id === movie.id);
    };
    const isMovieWatched = (movie) => {
        return watchedCards.some((watchedMovie) => watchedMovie.id === movie.id);
    };


    //displays likedCards or WatchedCards when sidebar is clicked
    const handleFilterChange = (filterType) => {
        switch (filterType) {
            case 'liked':
                setSortedMovies(likedCards)
                setIsSorted(true);
                break;
            case 'watched':
                setSortedMovies(watchedCards)
                setIsSorted(true);
                break;

            case 'home':
                setSortedMovies(movies)
                console.log(movies)
                setIsSorted(true);
                break;

            default:
                setSortedMovies(movies)
                setIsSorted(true);
            // do nothing
        }
    };


    return (
        <div>
            <SortBox onSort={(changeSort)} movies={movies} />
            <div className="movies-list">
                <Sidebar onFilter={(handleFilterChange)} movies={movies} />
                {isSorted ? (
                    sortedMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            data={movie}
                            onLike={handleLike}
                            onWatch={handleWatch}
                            isLiked={isMovieLiked(movie)}
                            isWatched={isMovieWatched(movie)} /> //if has bee sorted
                    ))
                ) : (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            data={movie}
                            onLike={handleLike}
                            onWatch={handleWatch}
                            isLiked={isMovieLiked(movie)}
                            isWatched={isMovieWatched(movie)} /> //if hasnt been called to sort
                    ))
                )}
            </div>
        </div>
    );
};




export default MovieList;