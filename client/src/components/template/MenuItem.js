import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLink = styled(Link)`
  display: block;
  padding: 9.5px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  background: ${(props) => (props.current ? props.theme.palette.secondary : 'transparent')};

  > i svg {
    fill: ${(props) => (props.current
    ? props.theme.palette.text.contrast
    : props.theme.palette.text.secondary)};
  }

  &:hover {
    background: ${(props) => props.theme.palette.secondary};
    > i svg {
      fill: ${(props) => props.theme.palette.text.contrast};
    }
  }
`;

export const Item = styled.li`
  list-style: none;
  position: ${(props) => props.position};
  &:hover {
    ul {
      display: block;
    }
  }
`;

const MenuItem = ({ link, icon, current }) => (
  <Item>
    <StyledLink to={link} current={!!current}>
      <i>{icon}</i>
    </StyledLink>
  </Item>
);

MenuItem.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
  current: PropTypes.bool,
};

export default MenuItem;
