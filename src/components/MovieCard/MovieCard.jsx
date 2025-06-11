import React from "react";
import './MovieCard.css';
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
const BASE_URL = "https://image.tmdb.org/t/p/w500";



const MovieCard = ({ data }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
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
            </div>
            {isModalOpen && (
                <Modal movieId={data.id} onClose={closeModal} />
            )}
        </>
    );
};

export default MovieCard;