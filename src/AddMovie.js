import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'
import {useForm} from 'react-hook-form'

const AddMovie = () =>{
    const [movies, setMovies] = useContext(MovieContext)
    const {register, handleSubmit, formState : {errors} } = useForm()

    const onSubmit = ({name, cost}, e) => {
        setMovies((prevMovies) => {
           return  [...prevMovies, {name : name, price : `$${cost}`}]
        })
        e.target.reset()
    }
    return(
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("name", {required : "This field cannot be empty"})}/>
              {errors.name &&<p>{errors.name.message}</p>}
              <input type="number" {...register("cost", {required : "This field cannot be empty"})}/>
              {errors.cost &&<p>{errors.cost.message}</p>}
              <button type="submit">ADD</button>
          </form>
        </>
    )
}

export default AddMovie;