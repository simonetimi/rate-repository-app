import { gql } from '@apollo/client';

export const getRepositories = gql`
  query Query(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
  ) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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
