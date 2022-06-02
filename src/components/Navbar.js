import { Container } from "./styles/Container"
import { StyledNavbar, StyledLink } from "./styles/Navbar.styled"
export const Navbar = () =>{
    return (
        <StyledNavbar>
            <Container>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/about'}>About</StyledLink>
                <StyledLink to={'/results'}>Results</StyledLink>
            </Container>
        </StyledNavbar>
    )
}