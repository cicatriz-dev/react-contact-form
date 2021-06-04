import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]).isRequired,
};

export default Card;
