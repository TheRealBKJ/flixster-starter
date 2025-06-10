import { useState } from 'react'
import './App.css'
import MovieList from  './components/MovieList/MovieList'
import data from './data/data.js'
import { useState } from 'react'
import { useEffect } from 'react'


function fetchMoreData (){
  console.log('hi')
}

const App = () => {
  return (
    <div className="App">
      <h1>Flixster</h1>
      <MovieList movies = {data}/>
      <button>Load More</button>
    </div>
  )
}

export default App
