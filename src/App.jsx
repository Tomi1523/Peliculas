import React from "react";
import NavBar from "./Componentes/NavBar";
import MovieList from "./Componentes/MovieList";
import UserContext from "./contexts/UserContext";
import MoviesContext from "./contexts/MoviesContext";

const App = () => {
  return (
    <div>
      <UserContext>
        <MoviesContext>
          <NavBar />
          <MovieList />
        </MoviesContext>
      </UserContext>
    </div>
  );
};

export default App;
