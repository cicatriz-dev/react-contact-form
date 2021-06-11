import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.nav`
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.lightBlue};
  border-radius: 0px 0px 25px 25px;

  @media (min-width: 768px) {
    justify-content: flex-start;

    div {
      margin-left: 35px;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.pressStart};
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  margin-right: 28px;
  font-family: ${(props) => props.theme.fonts.pressStart};
  text-decoration: none;
  color: ${(props) => (props.current === 'true' ? props.theme.colors.black : props.theme.colors.darkGray)};
`;
