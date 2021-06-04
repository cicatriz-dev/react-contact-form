import styled from 'styled-components';

export const StyledHeader = styled.nav`
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.lightBlue};
  border-radius: 0px 0px 25px 25px;
`;

export const StyledTitle = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
`;
