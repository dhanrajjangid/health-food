import React from 'react';
import styled from 'styled-components';

// Example data (replace with your actual data)
const reviews = [
  { id: 1, author: 'Supreet Pawar', date: 'June 15, 2024', rating: 4, content: 'Great product, very satisfied!' },
  { id: 2, author: 'Tara Sharma', date: 'June 8, 2024', rating: 5, content: 'Best best gift for my sister.' },
  // Add more reviews as needed
];

const Reviews = () => {
  return (
    <ReviewsContainer>
      <Title>Customer Reviews</Title>
      {reviews?.map(review => (
        <Review key={review.id}>
          <ReviewHeader>
            <Author>{review.author}</Author>
            <Date>{review.date}</Date>
          </ReviewHeader>
          <Rating>{'\u2605'.repeat(review.rating)}</Rating>
          <Content>{review.content}</Content>
        </Review>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;

// Styled Components
const ReviewsContainer = styled.div`
  max-width: 800px;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Review = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  color: #888;
`;

const Rating = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  line-height: 1.6;
`;
