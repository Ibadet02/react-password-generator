import styled from "styled-components";



export const StyledBox = styled.div`
    display: flex;
    align-items: center;
    color: ${({ isActive })=>isActive?'#000':'rgba(0,0,0,.4)'};
    input + input:checked{
        color: red;
        background-color: red;
    }
`