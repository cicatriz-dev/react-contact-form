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

  @media (min-width: 768px) {
    font-size: 30px;
  }
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
    border: 1px solid ${(props) => props.theme.colors.black};
    box-sizing: border-box;
    border-radius: 3px;
    width: 200px;
    height: 40px;

    @media (min-width: 768px) {
      width: 400px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.red};
    padding-top: 4px;
  }
`;

export const StyledSubmit = styled.input`
  width: 200px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: ${(props) => props.theme.colors.purple};

  font-family: ${(props) => props.theme.fonts.poppins};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  margin-bottom: 6px;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;
