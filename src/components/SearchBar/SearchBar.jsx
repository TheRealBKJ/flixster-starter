import React from "react";
import { useState } from "react";
import { fetchMovies } from "../../api/fetchMovies";
import './SearchBar.css';
//sendData is what we send back to parent
export default function SearchBar({sendData}) {
  const [userInput, setUserInput] = useState(""); // to collect and update user input
  const [searchData, setSearchData] = useState([]); // to hold the search data for return later

  //updates when char is changed to register what the search query will be
  const grabSearch = (event) => {
    const { value } = event.target;
    setUserInput(value);
  };

  // if enter is hit on search
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchValues();
    }
  };
  //fetches from movies api and returns the data that matches when button is clicked
  const searchValues = () => {
    fetchMovies(
      undefined,
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=false&language=en-US&page=`
    ).then((data) => {
      setSearchData(data);
      console.log(data);
      sendData(data); //what we call in the header to return data
    });
  };

  // does same thing as nowplaying with fetching nowPlayign data again
  const clearValues = () => {
    fetchMovies(
          undefined,
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=`
        ).then((data) => {
          setSearchData(data);
          console.log(data);
          sendData(data); //what we call in the header to return data
        });
  }

  return (
    <div className="search-container">
      <input
        onChange={grabSearch} //tracks input
        type="text"
        value={userInput} //show user what they typed
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className = "input-box"
      />
      <button className="search-button"onClick={searchValues}>Search</button> {/*when search is clicked fetches!*/}
      <button className = "clear-button" onClick ={clearValues}>Clear</button>
    </div>
  );
}

//need a mapping function now
