import React from "react";
import './MovieCard.css';

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ data }) => {
    return (
        <div className="movie-card">
            <img 
                className="movie-image" 
                src={`${BASE_URL}${data.poster_path}`} 
                alt={data.title}
            />
            <div className="movie-box">
                <h3 className="title">{data.original_title}</h3>
                <p className="votes">Voting Average: {data.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieCard;