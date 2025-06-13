import React, { useState, useEffect } from "react";
import './MovieCard.css';
import Modal from "../Modal/Modal.jsx";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ data, onLike, onWatch, isLiked, isWatched }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(isLiked);
    const [isWatchClicked, setIsWatchClicked] = useState(isWatched);

    useEffect(() => {
        setIsHeartClicked(isLiked);
    }, [isLiked]);

    useEffect(() => {
        setIsWatchClicked(isWatched);
    }, [isWatched]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleHeartClick = (event) => {
        event.stopPropagation();
        setIsHeartClicked(!isHeartClicked);
        onLike(data);
    };

    const handleWatchClicked = (event) => {
        event.stopPropagation();
        setIsWatchClicked(!isWatchClicked);
        onWatch(data);
    };

    return (
        <>
            <div className="movie-card" onClick={openModal}>
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
                    <button
                        className={`heart ${isHeartClicked ? 'clicked' : ''}`}
                        onClick={handleHeartClick}
                    >
                        &#10084;
                    </button>
                    <div className="watch-box">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={isWatchClicked}
                            onClick={handleWatchClicked}
                        />
                        <label className="watched-text">Watched</label>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal movieId={data.id} onClose={closeModal} />
            )}
        </>
    );
};

export default MovieCard;