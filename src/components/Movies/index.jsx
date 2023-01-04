import React, { useState, useEffect } from 'react'
import { MoviesWrapper, MovieItemStyled, MovieTitleStyled, MovieYearStyled, MovieImdbIDStyled } from './Movies.styled'
// import { FetchMovies } from '../../helpers/FetchMovies'

const Movies = () => {
    const [searchValue, setSearchValue] = useState("Batman")
    const [moviesData, setMoviesData] = useState([])
    const FetchMovies = async (searchValue) => {
        const searchUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=8d55e7b4`
        const response = await fetch(searchUrl);
        const movies = await response.json()
        setMoviesData(movies.Search);
    };
    useEffect(() => {
        FetchMovies(searchValue)
    }, [])

    useEffect(() => {
        console.log("HERE", moviesData)
    }, [moviesData])

    return (
        <>
            <MoviesWrapper>
                {moviesData?.map((movie, index) => (
                    <MovieItemStyled key={index}>
                        <div className='info-wrapper'>
                            <MovieTitleStyled>{movie.Title}</MovieTitleStyled>
                            <div>
                                <MovieYearStyled>{movie.Year}</MovieYearStyled>
                                <MovieImdbIDStyled>{movie.imdbID}</MovieImdbIDStyled>
                            </div>
                        </div>
                    </MovieItemStyled>
                ))}
            </MoviesWrapper>
        </>
    )
}
export default Movies