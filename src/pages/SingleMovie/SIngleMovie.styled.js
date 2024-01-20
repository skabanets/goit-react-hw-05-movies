import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 25px;
  gap: 25px;
`;

export const MovieMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
export const MovieImg = styled.img`
  width: 400px;
  max-height: 600px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 20px;
`;

export const MovieInfoItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const OverviewText = styled.p`
  text-align: justify;
`;

export const Rating = styled.p`
  padding: 3px 6px;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.$bg};
`;

export const AdditionalInfolinks = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  text-decoration: underline;
  color: blue;

  &.active {
    color: white;
    padding: 3px 6px;
    background-color: #008080cf;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export const Genr = styled.li`
  padding: 3px 6px;
  background-color: lightblue;
  border-radius: 5px;
`;
