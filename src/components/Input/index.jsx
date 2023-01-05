import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { InputWrapper, InputField } from './Input.styled'

const Input = ({ placeholder, value, defaultValue, onChange, type, search, width, height }) => {
    return (
        <InputWrapper >
            {search && <CiSearch />}
            <InputField width={width} height={height} search={search} defaultValue={defaultValue} stype={type} placeholder={placeholder} value={value} onChange={() => onChange} />
        </InputWrapper>
    )
}

Input.defaultProps = {
    type: "text"
};

export default Input
