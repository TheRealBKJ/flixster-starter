import React from "react";
import { useState } from "react";
import "./NowPlaying.css";
import { fetchMovies } from "../../api/fetchMovies";

export default function NowPlaying({ originalData }) {
  const [searchData, setSearchData] = useState([]); // to hold the OG data for return later

  //fetches from movies api and returns the data that matches
  const originalValues = () => {
    fetchMovies(
      undefined,
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=`
    ).then((data) => {
      setSearchData(data);
      console.log(data);
      originalData(data); //what we call in the header to return data
    });
  };

  return (
    <div className="now-playing-container">
      <button className="switch-button" onClick={originalValues}>
        Now Playing
      </button>
    </div>
  );
}
