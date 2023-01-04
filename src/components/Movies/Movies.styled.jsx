import styled from "styled-components";

export const MoviesWrapper = styled.ol`
    padding:20px;
    max-height:350px;
    overflow-y:auto;

`

export const MovieItemStyled = styled.li`
    display: list-item; 

    .info-wrapper {
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px;
        
    
        &:not(last-child){
            border-bottom:1px solid #DDE9FB;
        }

        >div{
            display:flex;
            min-width:200px;
            justify-content:space-between;
            align-items:center;
        }s
    }
`

export const MovieTitleStyled = styled.p`
    max-width:200px;
    color: #4C8DEB;
`

export const MovieYearStyled = styled.div`


`

export const MovieImdbIDStyled = styled.div`


`