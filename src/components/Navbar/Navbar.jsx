import { NavMenu, StyledLink } from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavMenu>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </NavMenu>
  );
};
