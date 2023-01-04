import styled from "styled-components";

export const GridWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:24px;
    
    @media (max-width:1400px){
        flex-direction:column;
    }
`

export const GridSection = styled.section`
    display:flex;
    flex:1;
    flex-wrap:wrap;
    gap:24px;

  
`
export const HomeTitle = styled.h1`
    margin-top:0;
    margin-bottom: 10px;
`