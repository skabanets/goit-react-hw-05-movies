import { NotFoundPageWrapper, StyledLinkGoHome } from './NotFound.styled';
import { GiClick } from 'react-icons/gi';

const NotFound = () => {
  return (
    <NotFoundPageWrapper>
      <StyledLinkGoHome to="/">
        Home page
        <GiClick />
      </StyledLinkGoHome>
    </NotFoundPageWrapper>
  );
};

export default NotFound;
