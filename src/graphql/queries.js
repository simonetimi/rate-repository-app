import { gql } from '@apollo/client';

export const getRepositories = gql`
  query Query {
    repositories {
      edges {
        node {
          fullName
          id
          description
          forksCount
          language
          ownerName
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const getUser = gql`
  query {
    me {
      id
      username
    }
  }
`;
