import React from 'react'
import { useContext } from 'react'
import { User } from '../contexts/UserContext'

const Movie = ({ m }) => {

    const {toggleFavorite, usuario} = useContext(User)

    const imgStyles = {
        height : "260px",
        objectFit : "cover",
    }

    const isFavorite = usuario?.favoritesMovies?.includes(m.id)

  return (
    <div className='card'>
    <img
        src={m.imageUrl}
        alt={m.title}
        className='card-img-top'
        style={imgStyles}
    />
        <div className='card-body'>
            <h4>{m.title}</h4>
            {usuario?.id &&
            <button className={`btn ${isFavorite ? "btn-success" : "btn-outline-primary"}`} onClick={() => toggleFavorite(m.id)}>
                Favorito
            </button>
            }
        </div>
    
      
    </div>
  )
}

export default Movie
