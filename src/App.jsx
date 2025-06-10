import { useState } from 'react'
import './App.css'
import MovieList from  './components/MovieList/MovieList'
import data from './data/data.js'

const App = () => {
  return (
    <div className="App">
      <h1>Flixster</h1>
      <MovieList movies = {data}/>
    </div>
  )
}

export default App
