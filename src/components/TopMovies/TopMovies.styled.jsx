import styled from "styled-components";

export const TopMoviesWrapper = styled.ol`
    padding:20px;
`

export const MovieItemStyled = styled.li`
    display: list-item; 

    >div {
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px;
        color: #4C8DEB;
    
        &:not(last-child){
            border-bottom:1px solid #DDE9FB;
        }
    }
`

export const RatingStyled = styled.div`
    display:flex;
    width:50px;
    justify-content:space-between;
    align-items:center;
    color:#405169;

    svg{
        color:#FFAB49;
    }
`