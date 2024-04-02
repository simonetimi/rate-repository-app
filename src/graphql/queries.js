// noinspection GraphQLUnresolvedReference

import { gql } from '@apollo/client';

export const getRepositories = gql`
  query Repositories(
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $after: String
  ) {
    repositories(
      first: $first
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      after: $after
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const getRepository = gql`
  query ($id: ID!, $reviewsFirst2: Int, $reviewsAfter2: String) {
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
      reviews(first: $reviewsFirst2, after: $reviewsAfter2) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
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

export const getReviews = gql`
  query {
    me {
      id
      username
      reviews {
        edges {
          node {
            createdAt
            id
            rating
            repository {
              name
            }
            repositoryId
            text
            user {
              username
            }
          }
        }
      }
    }
  }
`;
