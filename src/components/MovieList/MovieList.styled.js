import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  padding: 5px;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: green;
    border-bottom: 1px green solid;
  }
`;
