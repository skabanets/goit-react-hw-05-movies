import { Navbar } from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { HeaderContainer, StyledHeader } from './Layout.styled';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderContainer>
            <h1>Kinogo</h1>
            <Navbar />
          </HeaderContainer>
        </Container>
      </StyledHeader>

      <Outlet />
    </>
  );
};
