import { createContext } from "react";

export const contextoMovies = createContext();

import React from 'react'
import initialMovies from "../const/initialMovies";

const MoviesContext = ({children}) => {


    const data = { movies: initialMovies }

  return (
    <div>
    <contextoMovies.Provider value={data}> 
      {children}
      </contextoMovies.Provider>
    </div>
  )
}

export default MoviesContext
