import { useState } from "react";
import React from "react";
import "./SortBox.css";
import { useEffect } from "react";
export default function SortBox({onSort, movies}){
    const [sortByValue, setSortByValue] = useState('0'); // Initialize with the default value
   
    useEffect(() => {
        if (sortByValue !== '0') {
            sortBy(sortByValue);
        }
    }, [sortByValue]);
    const sortBy = (criteria) =>{
        let sortedData = [...movies]//we are changing this variable based on switch statement

        switch(criteria) { //sort by title
            case'title':
                sortedData.sort((a,b) => a.title.localeCompare(b.title));
                break;
            case'releaseDate'://sort by date
                sortedData.sort((a,b) => {
                    const dateA = new Date(a.release_date);
                    const dateB = new Date(b.release_date);
                    return dateA - dateB;
                } )
                break;

            case 'voteAverage': //sort by voting average
                sortedData.sort((a,b) => b.vote_average - a.vote_average );
                break;

            default:
                sortedData = movies;
        }
        onSort(sortedData);//send to parent function which is movieList
    }

    return (
        <div className="sort-box">
            <label className="sort-text">Sort By:</label>
            <select 
                className="drop-down" 
                value={sortByValue} // Set the value prop
                onChange={(e) => {
                    setSortByValue(e.target.value); // Update the state
                    sortBy(e.target.value);
                }}
            >
                <option disabled value="0">None</option>
                <option value="title">Title(A-Z)</option>
                <option value="releaseDate">Most Recent</option>
                <option value="voteAverage">Vote Average</option>
            </select>
        </div>
    )
}