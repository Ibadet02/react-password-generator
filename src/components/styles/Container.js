import styled from "styled-components";

export const Container = styled.div`
    width: ${({flex_dr})=>flex_dr? 'fit-content': '70rem'};
    max-width: ${({flex_dr})=>flex_dr? '30rem': '70rem'};
    min-height: ${({flex_dr})=>flex_dr? '20rem': ''};
    word-wrap: break-word;
    word-break: break-all;
    display: flex;
    flex-direction: ${({flex_dr})=>flex_dr || 'row'};
    justify-content: ${({flex_dr})=>flex_dr? 'space-around': ''};
    background-color: ${({flex_dr})=>flex_dr? 'rgb(143,203,188)': ''};
    padding: ${({flex_dr})=>flex_dr? '1rem': ''};
    margin-top: ${({flex_dr})=>flex_dr? '5rem': ''};
`