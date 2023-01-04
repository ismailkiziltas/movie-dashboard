import styled from 'styled-components'

export const ActivityWrapper = styled.ul`
    list-style:none;
`

export const ActivityItemStyled = styled.li`
    display:flex;
    justify-content: center;
    margin-bottom: 15px;
    height: 140px;
    &:last-child {
        margin-bottom: 0;
        div {
            &:nth-child(2) {
                &:after {
                    height: 100% !important;
                }
            }
        }
    }
    
`
export const ActivityDate = styled.div`
    flex: 0 0 100px;
    text-align:right;

    >p:first-child{
        font-size: 12px;
        color: #748AA9;
    }
`

export const ActivityIcon = styled.div`
    position: relative;
    flex: 0 0 50px;
    text-align:center;
    margin: 0 75px;
    >i {
        position: relative;
        z-index: 1;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:44px;
        height:44px;
        border-radius:50%;
        box-shadow: 0px 2px 4px rgba(76, 141, 235, 0.256992);
        background-color: #ffffff;
        svg {
            width: 22px;
            height: 22px;

            &.blue {
                path {
                    fill: #4C8DEB;
                    stroke: #4C8DEB;
                }
            }
            &.green {
                path {
                    fill: #5AD6B0;
                    stroke: #5AD6B0;
                }
            }
            &.orange {
                path {
                    fill: #FFAB49;
                    stroke: #FFAB49;
                }
            }
        }
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: calc(100% + 30px);
        width: 1px;
        margin: auto;
        background-color: rgba(76, 141, 235, 0.186481);
    }
`

export const ActivityDesc = styled.div`
    flex:0 0 400px;
    text-align:left;
    padding:10px;
    box-shadow: 0px 2px 10px rgba(76, 141, 235, 0.10077);
    border-radius:8px;
`