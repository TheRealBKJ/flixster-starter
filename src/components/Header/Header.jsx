import SearchBar from "../SearchBar/SearchBar.jsx";
import React, { useState } from "react";
import "./Header.css";
import NowPlaying from "../NowPlaying/NowPlaying.jsx";





export default function Header ({sendToApp}) {
    const handleSearchData = (data) => { //pass up function to appjsx
        sendToApp(data); //sends data to parent app.jsx, already tested logic for console for SearchBar
    }

    const switchScreen = (data) => {
        sendToApp(data) //if screen is switched - for NowPlaying
    }

    return (
        <header className="header">
            <div className = "elements-container">
                <banner className = "banner">Movies Website</banner>
                <SearchBar sendData={handleSearchData}/>
                <NowPlaying originalData={switchScreen}/> 
            </div>
        </header>
    );

}