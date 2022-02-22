import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/API';
import {
  Wrapper,
  Button,
  MovieWrapper,
  MoviePoster,
  MovieCard,
  MovieTitle,
  Text,
  TextHeading,
  MovieDetailsList,
  MovieDetailsItem,
  MovieDetailsLink,
} from './MovieDetailsPage.styled';
import noImage from '../../images/noImage.jpg';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <Wrapper>
        <Button type="button" onClick={goBack}>
          Go back
        </Button>
        <MovieWrapper>
          {poster_path ? (
            <MoviePoster src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="Movie Poster" />
          ) : (
            <MoviePoster src={noImage} alt="Movie Poster" />
          )}
          <MovieCard>
            <MovieTitle>{title}</MovieTitle>
            <Text>User Score: {vote_average * 10}%</Text>
            <TextHeading>Overview</TextHeading>
            <Text>{overview}</Text>
            <TextHeading>Genres</TextHeading>
            <MovieDetailsList>
              {genres &&
                genres.map(({ id, name }) => {
                  return (
                    <MovieDetailsItem key={id}>
                      <Text>{name}</Text>
                    </MovieDetailsItem>
                  );
                })}
            </MovieDetailsList>
            <TextHeading>Additional Information</TextHeading>
            <MovieDetailsList>
              <MovieDetailsItem>
                <MovieDetailsLink
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Cast
                </MovieDetailsLink>
              </MovieDetailsItem>
              <MovieDetailsItem>
                <MovieDetailsLink
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Reviews
                </MovieDetailsLink>
              </MovieDetailsItem>
            </MovieDetailsList>
          </MovieCard>
        </MovieWrapper>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
