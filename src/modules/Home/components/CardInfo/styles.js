import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const StyledImg = styled.img`
  width: 100px;
  border-radius: 50%;
  box-shadow: 2px 4px 3px ${(props) => props.theme.colors.lightGray};
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 52px 22px;

  p {
    font-family: ${(props) => props.theme.fonts.pressStart};
    text-align: center;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 16px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-family: ${(props) => props.theme.fonts.pressStart};
    font-size: 24px;
  }
`;
