import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { List, Item, ItemLink } from './MovieList.styled';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </ItemLink>
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
