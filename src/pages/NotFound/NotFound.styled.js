import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundPageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('https://www.moradam.com/wp-content/uploads/2017/08/404-hatas%C4%B1.jpg');
  background-position: 50%;
`;

export const StyledLinkGoHome = styled(Link)`
  position: relative;
  top: 200px;
  font-size: 32px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: white;
  background-color: darkblue;
  border-radius: 5px;
  padding: 6px 12px;
`;
