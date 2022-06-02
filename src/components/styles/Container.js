import styled from "styled-components";

export const Container = styled.div`
    width: 70rem;
    display: flex;
    flex-direction: ${({flex_dr})=>flex_dr || 'row'};
    background-color: aliceblue;
`