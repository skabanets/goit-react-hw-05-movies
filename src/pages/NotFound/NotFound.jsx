import { NotFoundPageWrapper, StyledLinkGoHome } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundPageWrapper>
      <StyledLinkGoHome to="/">Go to home</StyledLinkGoHome>
    </NotFoundPageWrapper>
  );
};

export default NotFound;
