import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledTitle } from './styles';

const Header = ({ username }) => {
  return (
    <StyledHeader>
      <StyledTitle>{username}</StyledTitle>
    </StyledHeader>
  );
};

Header.propTypes = {
  username: PropTypes.string,
};

Header.defaultProps = {
  username: 'Fulano de tal',
};

export default Header;
