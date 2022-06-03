import styled from "styled-components";

export const Container = styled.div`
    width: ${({flex_dr})=>flex_dr? 'fit-content': '70rem'};
    max-width: ${({flex_dr})=>flex_dr? '30rem': '70rem'};
    min-height: ${({flex_dr})=>flex_dr? '20rem': ''};
    display: flex;
    flex-direction: ${({flex_dr})=>flex_dr || 'row'};
    justify-content: ${({flex_dr})=>flex_dr? 'space-around': ''};
    background-color: ${({flex_dr})=>flex_dr? 'rgb(143,203,188)': ''};
    padding: ${({flex_dr})=>flex_dr? '1rem': '.2rem'};
    margin-top: ${({flex_dr})=>flex_dr? '5rem': ''};
    @media(max-width:438px){
        width: 100%;
        font-size: 1rem;
    }
    @media(max-width: 417px){
        justify-content: ${({flex_dr})=>flex_dr? '': 'space-between'};
    }
`