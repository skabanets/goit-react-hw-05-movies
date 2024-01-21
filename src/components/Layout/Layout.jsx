import { Navbar } from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { HeaderContainer, StyledHeader } from './Layout.styled';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderContainer>
            <Logo />
            <Navbar />
          </HeaderContainer>
        </Container>
      </StyledHeader>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
