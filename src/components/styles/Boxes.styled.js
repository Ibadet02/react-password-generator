import styled from "styled-components";



export const StyledBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    color: ${({ isActive })=>isActive?'#000':'rgba(0,0,0,.4)'};
    font-size: 1.5rem;
    @media(max-width: 335px){
        font-size: 1rem;
    }
    input[type=number]{
        width: 3rem;
        margin-left: 10rem;
        border: none;
        outline: none;
        height: 2.4rem;
        font-size: 1rem;
        text-align: center;
        @media(max-width: 438px){
            margin-left: 4rem;
        }
    }
`