import { useState } from "react";
import { createContext } from "react";


export const User = createContext();

const initalUsuario = {
    id : 1,
    name: "Tomi",
    favoritesMovies: [1,2]
}

const UserContext = ({children}) => {
    
    

        const [usuario, setUsuario] = useState(initalUsuario)


        const login = () =>{
            setUsuario(initalUsuario);
        }

        const logout = () =>{
            setUsuario(null);
        }

        const toggleFavorite = (movieId) =>{

                const isFavorite = usuario.favoritesMovies.includes(movieId)
                const favoritesMovies = isFavorite
                    ? usuario.favoritesMovies.filter(favMovId => favMovId !== movieId)//Delete
                    : [...usuario.favoritesMovies, movieId]//Add
                    

            setUsuario({
                    ...usuario,
                    favoritesMovies

            })
        }

    const data = {usuario, login, logout, toggleFavorite}

  return (
    <div>
      <User.Provider value={data}>
        {children}
      </User.Provider>
    </div>
  )
}

export default UserContext
