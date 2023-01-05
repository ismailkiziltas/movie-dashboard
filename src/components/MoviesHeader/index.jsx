import React from 'react'
import { Input, Button } from '../index'
import { MoviesHeaderwrapper } from './MoviesHeader.styled'


const MoviesHeader = () => {
    return (
        <MoviesHeaderwrapper>
            <Input placeholder="Search" defaultValue="Batman" search width="65%" />
            <Input placeholder="Year" search width="35%" />
            <Button text="Search" />
        </MoviesHeaderwrapper>
    )
}

export default MoviesHeader