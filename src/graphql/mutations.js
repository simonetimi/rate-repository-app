import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation {
    authenticate(credentials: { username: "kalle", password: "password" }) {
      accessToken
    }
  }
`;

export const NEW_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      repository {
        id
        name
      }
      text
      rating
    }
  }
`;
