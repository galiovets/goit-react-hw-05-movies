import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 15px 5px;
`;

export const Button = styled.button`
  margin-bottom: 15px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const MoviePoster = styled.img`
  margin-right: 40px;
`;

export const MovieCard = styled.div`
  max-width: 400px;
  font-size: 15px;
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 15px;
  padding-bottom: 3px;
  color: green;
  text-decoration: underline;
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;

export const TextHeading = styled.h3`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

export const MovieDetailsItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const MovieDetailsLink = styled(NavLink)`
  padding-bottom: 2px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: green;

  &.active {
    border-bottom: 1px solid green;
  }
`;
