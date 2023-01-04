import React from 'react'
import { SelectStyled } from './Select.styled'

const Select = ({ options, onChange, value }) => {
    return (
        <SelectStyled onChange={(e) => onChange(e)} defaultValue={value}>
            {options && options.map((option, index) => (
                <option key={index} value={option.value}>{option.title}</option>
            ))}
        </SelectStyled >
    )
}

export default Select