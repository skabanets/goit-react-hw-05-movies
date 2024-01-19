import { NavList, NavMenu, StyledLink } from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavMenu>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </NavList>
    </NavMenu>
  );
};
