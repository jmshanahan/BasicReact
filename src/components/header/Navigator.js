import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import cuid from 'cuid';
import styled from 'styled-components';
import {
  titleFamilyFamily,
  titleFontSize,
  toolBarColor,
  background,
  fontFamily,
  fontSize,
  primary1,
  gray3,
  gray5
} from '../../css/styles';
const margin = '6px solid rgba(0, 0, 0, 0.0975)';
const Container = styled.div`
  background-color: ${toolBarColor};
  border-bottom: ${margin};
  border-top: ${margin};
  font-family: ${fontFamily};
  font-size: ${fontSize};
`;

const List = styled.ul`
  display: flex;
  background-color: ${toolBarColor};
`;
const ListItem = styled.li`
  background-color: ${gray5};
  flex: 0 0 70px;
  margin: 8px;
  padding: 4px;
  text-align: center;
  &:first-child {
    margin-right: auto;
    width: 200px;
  }
`;
const StyledLink = styled(NavLink)`
  color: ${gray5} &.active {
    color: ${primary1};
  }
`;
const Title = styled.span`
  font-family: ${titleFamilyFamily};
  font-size: ${titleFontSize};
`;
const Navigator = () => {
  return (
    <Container>
      <List>
        <ListItem key={cuid()}>
          <Link to="/">
            <Title>Comeragh Solutions</Title>
          </Link>
        </ListItem>
        <ListItem key={cuid()}>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem key={cuid()}>
          <NavLink to="/button">Button</NavLink>
        </ListItem>
        <ListItem key={cuid()}>
          <NavLink to="/Users">Users</NavLink>
        </ListItem>
        <ListItem key={cuid()}>
          <NavLink to="/Contact">Contact</NavLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigator;
