import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
//renders the movies, going to use grid for this
const MovieList = ({movies}) => {
    return(
        <div className="movies-list">
        {movies.map((movie,index) => (
            <MovieCard key = {index} data = {movie}/>
        ))}
        </div>
    );
};




export default MovieList;