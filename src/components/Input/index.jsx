import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { InputWrapper, InputField } from './Input.styled'

const Input = ({ placeholder, value, onChange, type, search }) => {
    return (
        <InputWrapper >
            {search && <CiSearch />}
            <InputField search={search} stype={type} placeholder={placeholder} value={value} onChange={() => onChange} />
        </InputWrapper>
    )
}

Input.defaultProps = {
    type: "text"
};

export default Input
