import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/API';
import { ReviewsList, ReviewsItem, ReviewsName, ReviewsText } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ReviewsItem key={id}>
              <ReviewsName>Author: {author}</ReviewsName>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          );
        })
      ) : (
        <ReviewsText>Sorry, there are no reviews available</ReviewsText>
      )}
    </ReviewsList>
  );
}

export default Reviews;
