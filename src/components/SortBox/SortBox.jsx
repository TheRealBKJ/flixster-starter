import { useState } from "react";
import React from "react";

//onSort is the parent statement i will use in movie list
//movies is the data passed on
// i need to define the dropdown menu and do a sleection and a big if and else change
// after that I return back the sorted list :)

export default function SortBox({onSort, movies}){
    const sortBy = (criteria) =>{
        let sortedData;//we are changing this variable based on switch statement
        switch(criteria) { //sort by title
            case'title':
                sortedData = movies.sort((a,b) => a.title.localeCompare(b.title));
                break;
            case'releaseDate'://sort by date
                sortedData = movies.sort((a,b) => {
                    const dateA = new Date(a.release_date);
                    const dateB = new Date(b.release_date);
                    return dateA - dateB;
                } )
                break;

            case 'voteAverage': //sort by voting average
                sortedData= movies.sort((a,b) => b.vote_average - a.vote_average );
                break;

            default:
                sortedData = movies
        }
        onSort(sortedData);//send to parent function which is movieList
    }




    //build select box for input
    return (
        <div className="sort-box">
            <label>Sort By:</label>
            <select className="drop-down" onChange={(e) => sortBy(e.target.value)}>
                <option disabled selected value="0">Search By</option>
                <option value="title">Title</option>
                <option value="releaseDate">Most Recent</option>
                <option value="voteAverage">Vote Average</option>
            </select>
        </div>
    )

}