import React from "react";

// only need one input - data, the data has the hash keys with the info
const MovieCard = ({data}) => {
    return( 
        <div className="movie-card">
            <img className ="movie-image" src = "https://picsum.photos/200/300" alt = {data.title}/>
            <h3 className="title">{data.original_title}</h3>
            <p className="votes">Voting Average: {data.vote_average}</p>
        </div>
    );
};



export default MovieCard;