import React from 'react'
import { ButtonStyled } from './Button.styled'

const Button = ({ text, width, height }) => {
    return (
        <ButtonStyled width={width} height={height}>{text}</ButtonStyled>
    )
}

export default Button