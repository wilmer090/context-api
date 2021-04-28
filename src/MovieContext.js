import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name : 'Harry Potter',
            price : '$10', 
            id: '001'
        },
        {
            name : 'Game of Thrones',
            price : '$5',
            id: '002'
        },
        {
            name : 'Inception',
            price : '$20',
            id: '003'
        }
    ])

    return(
        <MovieContext.Provider value ={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )

}