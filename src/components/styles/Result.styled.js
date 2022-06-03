import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledResult = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledNumberOfCharacters = styled.span`
    text-align: center;
`

export const StyledFinalResult = styled.span`
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    overflow-x: auto;
    margin-top: 1rem;
    span{
        display: flex;
        background-color: #fff;
        align-items: center;
        overflow-x: auto;
        min-height: 30px;
    }
    button{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        background-color: green;
        &:active{
            transform: scale(.96);
        }
    }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: .2rem;
    cursor: pointer;
`