import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledTitle } from './styles';
import useWidth from '../../helpers/useWidth';

const Header = ({ username }) => {
  const { width: componentWidth } = useWidth();
  const location = useLocation();
  return (
    <StyledHeader>
      {componentWidth < 768 ? (
        <StyledTitle>{username}</StyledTitle>
      ) : (
        <div>
          <StyledLink to="/" current={(location.pathname === '/').toString()}>
            Sobre
          </StyledLink>
          <StyledLink to="/contato" current={(location.pathname === '/contato').toString()}>
            Contato
          </StyledLink>
        </div>
      )}
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
