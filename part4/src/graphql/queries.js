import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY_BY_ID = gql`
  query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      url
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY_WITH_REVIEWS = gql`
  query(
    $repositoryId: ID!,
    $first: Int,
    $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewFields
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
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
`;


export const USERS = gql`
  query {
    users {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUsea($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`;

