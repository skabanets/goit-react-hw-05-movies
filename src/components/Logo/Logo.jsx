import { StyledLogo } from './Logo.styled';
import { RiMovie2Fill } from 'react-icons/ri';

export const Logo = () => {
  return (
    <StyledLogo to="/">
      <RiMovie2Fill />
      <p>MFest</p>
    </StyledLogo>
  );
};
