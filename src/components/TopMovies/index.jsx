import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { TopMoviesWrapper, MovieItemStyled, RatingStyled } from './TopMovies.styled'

const TopMovies = ({ TopMoviesData }) => {
    return (
        <TopMoviesWrapper>
            {TopMoviesData.map((movie, index) => (
                <MovieItemStyled key={index}>
                    <div>
                        {movie.title}
                        <RatingStyled><AiFillStar />{parseFloat(movie.rating).toFixed(1)}</RatingStyled>
                    </div>
                </MovieItemStyled>
            ))}
        </TopMoviesWrapper>
    )
}

export default TopMovies