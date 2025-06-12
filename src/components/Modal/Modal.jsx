import React from "react";
import { useState } from "react";
import { fetchMovies } from "../../api/fetchMovies";
import { use } from "react";
import { useEffect } from "react";
import "./Modal.css";



const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://image.tmdb.org/t/p/w500";


export default function Modal({movieId}){
    const [isOpen,setOpen] = useState(false);
    const [movieData, setMovieData] = useState([])
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

        //function to get json data for Modal, copied from function in files
    const returnDetails = async () => {
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
        };

        try{
            const response = await fetch(url,options);
            const data = await response.json();
            console.log(data.genres)
            setMovieData(data);
        } catch(error){
            console.error('failed to fetch movies',error);
            throw error;
        }
    };

    // Use useEffect to fetch data and open modal when data is available
    useEffect(() => {
        if (movieId) {
        returnDetails();
        }
    }, [movieId]);
    // Open modal when movieData is set
    useEffect(() => {
        if (movieData) {
        setOpen(true);
        }
    }, [movieData]);
    // Function to close the modal
    const closeModal = () => {
        setOpen(false);
    };
        


    //what we are returning after fetching, title, image, releasedate,overiew,genres
    //movieData.title for title
    //`${BASEURL}${movieData.backdrop_path}` for image
    //movieData.release_date for release date
    //movieData.overview for overview
    //genres is an array for for each
    //only want to return or show display if the click button is true
    return (
        <div>
            {isOpen && movieData && (
                <div className="modal" onClick ={closeModal}>
                    <div className ="modal-background">
                    <h2 className="movie-title">{movieData.title}</h2>
                    <img className="image-photo" src={`${BASE_URL}${movieData.backdrop_path}`} alt={movieData.title} />
                    <p className="release-date">Release Date: {movieData.release_date}</p>
                    <p className="overview">Overview: {movieData.overview}</p>
                    <div className="close-genre-container">
                        <ul className="genre-text">
                            <p className= "genre-header">Genres:</p>
                            {(movieData.genres)?.map((genre) => (// shoutout StackOVerFLOW, found a fix to the issue of map in seconds
                                <li key={genre.id}>{genre.name}</li> 
                            ))} {/* Append list items using map*/}
                        </ul>
                        <div id="runtime">Runtime: {movieData.runtime} Minutes </div>
                        <button className="close-button" onClick = {closeModal}>Close</button>
                    </div>
                    </div>
                </div>
            )}
        </div>
    )
}
        



