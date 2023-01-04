import styled from "styled-components";

export const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 22px;
        border-radius: 6px;
        padding: 10px;
        transition: .3s all;
    
        &:hover, &.active {
          background-color:#2350BC;
        }
    }
`