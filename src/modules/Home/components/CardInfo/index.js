import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../../../utils/components/Card';
import { BioContainer, Container, IconsWrapper, InfoWrapper, StyledImg } from './styles';
import githubIcon from '../../../../utils/assets/Github.svg';
import linkedinIcon from '../../../../utils/assets/Linkedin.svg';
import Button from '../../../../utils/components/Button';
import useWidth from '../../../../utils/helpers/useWidth';

const CardInfo = ({ user }) => {
  const { width } = useWidth();
  return (
    <Card>
      <Container>
        <InfoWrapper>
          {width >= 768 && <h2>{user.name}</h2>}
          <StyledImg src={user.avatar_url} alt="github profile" />
        </InfoWrapper>
        <BioContainer>
          <p>{user.bio}</p>
          <IconsWrapper>
            <a href="https://github.com/pedrocmello" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://linkedin.com/in/pedro-c-mello" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
          </IconsWrapper>
        </BioContainer>
        {width < 768 && (
          <Link to="/contato">
            <Button type="button">Contato</Button>
          </Link>
        )}
      </Container>
    </Card>
  );
};

CardInfo.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CardInfo;
