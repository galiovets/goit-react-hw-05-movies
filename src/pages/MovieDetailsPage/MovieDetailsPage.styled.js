import styled from 'styled-components';

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

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
