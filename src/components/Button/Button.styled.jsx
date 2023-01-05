import styled from "styled-components";

export const ButtonStyled = styled.button`
    border-radius:5px;
    border: 1px solid rgba(76, 141, 235, 0.186481);
    background-color: #4C8DEB;
    padding: 5px 8px;
    color:#fff;
    cursor:pointer;
    ${props => props.width && `width: ${props.width};`}
    ${props => props.height && `height: ${props.height};`}
`