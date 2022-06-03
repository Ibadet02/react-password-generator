import styled from "styled-components";



export const StyledBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    color: ${({ isActive })=>isActive?'#000':'rgba(0,0,0,.4)'};
    font-size: 1.5rem;
    input[type=number]{
        width: 3rem;
        margin-left: 10rem;
        border: none;
        outline: none;
        height: 1.4rem;
        text-align: center;
    }
`