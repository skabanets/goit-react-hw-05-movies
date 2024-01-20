import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: inline-flex;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  color: #b2b7b9;
`;
export const StyledLink = styled(NavLink)`
  font-size: 32px;
  font-weight: 600;
  &.active {
    color: white;
    font-weight: 700;
  }
`;
