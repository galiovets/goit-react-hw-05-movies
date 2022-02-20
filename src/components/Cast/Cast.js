import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/API';
import { CastList, CastImage, CastText } from './Cast.styled';
import notAvailable from '../../images/notAvailable.jpg';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <CastList>
      {cast.length > 0 ? (
        cast.map(({ cast_id, profile_path, name, character }) => {
          return (
            <li key={cast_id}>
              {profile_path ? (
                <CastImage src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
              ) : (
                <CastImage src={notAvailable} alt={name} />
              )}
              <CastText>{name}</CastText>
              <CastText>Character: {character}</CastText>
            </li>
          );
        })
      ) : (
        <CastText>Sorry, cast information is not available</CastText>
      )}
    </CastList>
  );
}

export default Cast;
