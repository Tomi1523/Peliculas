import React from 'react'
import { useContext } from 'react'
import { User } from '../contexts/UserContext';


const NavBar = () => {

    const { usuario, login, logout } = useContext(User);

  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
        <div className='container'>  
     <span className='navbar-brand'>
        <h2> {usuario ? `Hola ${usuario.name}` : "Bienvenido"} </h2>
     </span>

     {usuario
        ? <button className='btn btn-primary' onClick={logout}>
        Cerrar sesion
     </button>
        :<button className='btn btn-primary' onClick={login}>
        Iniciar sesion
     </button>
     }
     </div>
    </nav>
    

  )
}

export default NavBar
