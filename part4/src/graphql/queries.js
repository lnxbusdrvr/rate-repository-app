import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
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
  query {
    me {
      id
      username
    }
  }
`;

