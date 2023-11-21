import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    email
    createdAt
    token
  }
}
`
export const LOGIN_USER = gql`
mutation Login($input: LoginInput!) {
  loginUser(input: $input) {
    createdAt
    email
    id
    token
    username
  }
}
`;

export const ADD_TOOL = gql `
mutation AddTool($input: ToolInput) {
    addTool(input: $input) {
      id
      name
      price
      quantity
    }
  }
`
export const UPDATE_TOOL = gql`
  mutation UpdateTool($toolId: ID!, $input: ToolInput!) {
    updateTool(id: $toolId, input: $input) {
      id
      name
      price
      
    }
  }
`;