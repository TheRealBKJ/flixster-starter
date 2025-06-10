import SearchBar from "../SearchBar/SearchBar.jsx";
import React, { useState } from "react";
import "./Header.css";
import { fetchMovies } from "../../api/fetchMovies.js";
import NowPlaying from "../NowPlaying/NowPlaying.jsx";





export default function Header ({sendToApp}) {
    const [dataFromSearch, setDataFromSearch] = useState("");
    const handleSearchData = (data) => { //pass up function to appjsx
        sendToApp(data); //sends data to parent app.jsx, already tested logic for console
    }

    const switchScreen = (data) => {
        sendToApp(data)
    }


    return (
        <header className="header">
            <div className = "elements-container">
                <h1>Movies Website</h1>
                <SearchBar sendData={handleSearchData}/>
                <NowPlaying originalData={switchScreen}/> {/* //for now playing*/}
            </div>
        </header>
    );

}