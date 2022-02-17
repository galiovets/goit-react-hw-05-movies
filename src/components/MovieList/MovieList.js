import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { List, Item, ItemLink } from './MovieList.styled';

function MovieList({ movies }) {
  const { movieId } = useParams();
  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`}>{title}</ItemLink>
          </Item>
        );
      })}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieList;
