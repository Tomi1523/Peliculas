import React from "react";
import Movie from "./Movie";
import { useContext } from "react";
import { contextoMovies } from "../contexts/MoviesContext";


const MovieList = () => {

  const { movies } = useContext(contextoMovies)

  return (
    <div className="container">
      <div className="row">
      {movies.map(m => (
        <div className="col-md-4"  key={m.id}>
        <Movie 
        m={m}
         />
        </div>
      ))}
        
      </div>
      
    </div>
  );
};

export default MovieList;
