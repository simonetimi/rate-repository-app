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
          url
        }
      }
    }
  }
`;

export const getRepository = gql`
  query Query($id: ID!) {
    repository(id: $id) {
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
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
