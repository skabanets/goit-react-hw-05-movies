import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 32px;
  font-weight: 600;
  &.active {
    color: red;
  }
`;
