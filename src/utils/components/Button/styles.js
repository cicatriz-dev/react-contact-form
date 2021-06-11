import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 200px;
  height: 37px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  font-family: ${(props) => props.theme.fonts.poppins};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors.lightGray};
    opacity: 0.5;
  }
`;
