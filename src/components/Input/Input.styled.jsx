import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;

    svg{
        position:absolute;
        top:50%;
        left:10px;
        transform:translateY(-50%);
        color:#B1C8E9;
        font-size:18px;
    }
`

export const InputField = styled.input`
    border:1px solid #B1C8E9;
    padding:6px 16px;
    ${props => props.search && 'padding-left:30px;'}
    border-radius:6px;
    outline:none;
    
    &::placeholder{
        color:#B1C8E9;
    }
`