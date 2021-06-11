import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.pressStart};
  text-align: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.poppins};
`;

export const LabelInput = styled.label`
  display: inherit;
  flex-direction: inherit;
  margin: 12px 0;
  input {
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 3px;
    width: 200px;
    height: 30px;

    @media (min-width: 768px) {
      width: 400px;
      height: 40px;
    }
  }
`;

export const StyledError = styled.span`
  color: ${(props) => props.theme.colors.red};
  padding-top: 4px;
`;

export const StyledButton = styled.input`
  width: 200px;
  height: 37px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: ${(props) => props.theme.colors.purple};
  color: white;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.poppins};
  margin-bottom: 6px;

  @media (min-width: 768px) {
    width: 400px;
    height: 40px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
