import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 30px 5px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewsName = styled.h4`
  font-weight: 500;
  font-size: 20px;
  color: green;
`;

export const ReviewsText = styled.p`
  max-width: 900px;
`;
