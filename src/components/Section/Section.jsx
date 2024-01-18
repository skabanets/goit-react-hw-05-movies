import { Container } from 'components/Container/Container.styled';
import { SectionTitle, SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </SectionWrapper>
  );
};
