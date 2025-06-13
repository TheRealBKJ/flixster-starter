import React from "react";
import { useState } from "react";
import "./NowPlaying.css";
import { fetchMovies } from "../../api/fetchMovies";

export default function NowPlaying({ originalData }) {
  const [searchData, setSearchData] = useState([]); // to hold the Original data for return later

  //fetches from movies api again, same data 
  const originalValues = () => {
    fetchMovies(
      undefined,
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=`
    ).then((data) => {
      setSearchData(data);
      console.log(data);
      originalData(data); // return data back to header to pass into app
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
