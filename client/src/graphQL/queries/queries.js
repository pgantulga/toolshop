import { gql } from '@apollo/client';

export const GET_TOOLS = gql`
query Tools {
    tools {
      id
      name
      price
      quantity
    }
  }
`;

export const GET_TOOL_BY_ID = gql`

query Tool($toolId: ID) {
  tool(id: $toolId) {
    id,
    name,
    price
  }
}
`