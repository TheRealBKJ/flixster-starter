import React from "react";
import './MovieCard.css';
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
const BASE_URL = "https://image.tmdb.org/t/p/w500";


const MovieCard = ({ data }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const[isWatchClicked, setWatchClicked] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleHeartClick = (event) => {
        event.stopPropagation(); // prevent click event from bubbling up to parent element
        // toggle heart button state here
        setIsHeartClicked(!isHeartClicked);
    };

    const handleWatchClicked = (event) => {
        event.stopPropagation();
        setWatchClicked(!isWatchClicked);
    }

    return (
        <>
            <div className="movie-card" onClick={openModal}>{/* wrap entire card in modal to open!*/}
                <img
                    className="movie-image"
                    src={`${BASE_URL}${data.poster_path}`}
                    alt={data.title}
                />

                <div className="movie-box">
                    <h3 className="title">{data.original_title}</h3>
                    <p className="votes">Voting Average: {data.vote_average}</p>
                </div>
                <div className="heart-watched">
                    <button className={`heart ${isHeartClicked ? 'clicked' : ''}`} onClick = {handleHeartClick}>&#10084;</button>
                    <div className="watch-box">
                        <input type="checkbox"  className= "checkbox"onClick = {handleWatchClicked} />
                        <label className ="watched-text">Watched</label>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal movieId={data.id} onClose={closeModal} /> //if modal is open call modal and throw it the dataid:)
            )}
        </>
    );
};

export default MovieCard;