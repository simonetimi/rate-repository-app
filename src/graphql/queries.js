// noinspection GraphQLUnresolvedReference

import { gql } from '@apollo/client';

export const getRepositories = gql`
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
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
  query ($id: ID!) {
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
