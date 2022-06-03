import styled from "styled-components";
import { Link } from "react-router-dom"
export const StyledNavbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const StyledLink = styled(Link)`
    padding: 1rem 6rem 1rem 0;
    text-decoration: none;
    &:hover{
        color: red;
    }
    @media(max-width: 417px){
        padding: 1rem 0rem 1rem 0;
    }
`