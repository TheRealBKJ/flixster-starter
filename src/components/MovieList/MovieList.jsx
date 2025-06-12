import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
import SortBox from "../SortBox/SortBox.jsx";
import { useState } from "react";
import { useEffect } from "react";
//renders the movies, going to use grid for this
const MovieList = ({movies}) => {
    const [sortedMovies, setSortedMovies] = useState(movies);

    const changeSort = (sortedData =>{
        setSortedMovies(sortedData); //change sortedMovies
    })
    return(
        <div>
        <SortBox onSort={(changeSort)} movies={movies}/>
            <div className="movies-list">
            {movies.map((movie) => (
                <MovieCard key = {movie} data = {movie}/>
            ))}
            </div>
        </div>
    );
};




export default MovieList;