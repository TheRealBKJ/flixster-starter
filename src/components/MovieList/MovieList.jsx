import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
import SortBox from "../SortBox/SortBox.jsx";
import { useState } from "react";
import { useEffect } from "react";
//import {SideBar} from "../Sidebar/Sidebar.jsx";
//renders the movies, going to use grid for this
const MovieList = ({movies}) => {
    const [sortedMovies, setSortedMovies] = useState(movies);
    const [isSorted, setIsSorted] = useState(false); // so we can choose which one to use for movielist
    // we are gonna pass up each moviecard that is liked or watched out of sortedMovies
    //then we pass those arrays into sideBar child component
    const [likedCards, setLikedCards] = useState([]);
    const [watchedCards,setWatchedCards] = useState([]);

    //change to cards sorted
    const changeSort = (sortedData =>{
        setSortedMovies(sortedData); //change sortedMovies
        setIsSorted(true);
    })

    // change to cards selected by sidebar- for sidebar!
    const changeCards = (changedCards =>{
        setSortedMovies(changedCards);
    })



    
    
//<Sidebar onSelect = {(changeCards)} movies = {movies} />

    return(
        <div>
        <SortBox onSort={(changeSort)} movies={movies}/>
            
            <div className="movies-list">
            {isSorted ? (
                sortedMovies.map((movie) => ( 
                <MovieCard key={movie} data={movie} /> //if has been called to sort sorted movies has been updated
                ))
            ) : (
                movies.map((movie) => (
                <MovieCard key={movie} data={movie} /> //if hasnt been called to sort
                ))
            )}
            </div>
        </div>
    );
};




export default MovieList;