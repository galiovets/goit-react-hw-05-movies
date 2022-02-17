import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 15px 5px;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 3px;
  font-weight: 500;
  font-size: 15px;
  margin-right: 10px;
  color: green;

  &.active {
    border-bottom: 1px green solid;
  }
`;
