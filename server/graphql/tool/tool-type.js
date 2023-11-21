// Import the "gql" function from the "graphql-tag" library
// This function is used to parse GraphQL query strings into the standard GraphQL syntax
// https://www.npmjs.com/package/graphql-tag
const gql = require('graphql-tag')

// Define the "authorType" GraphQL schema using the "gql" function
const toolType = gql`
type Query {
    tool(id: ID): Tool
    tools: [Tool]
}   
type Tool {
    id: ID
    name: String
    price: Int
    quantity: Int
}
input ToolInput {
    id: ID
    name: String
    price: Int
    quantity: Int
}
type Mutation {
    addTool(input: ToolInput): Tool
    
}
`;

module.exports = toolType;

// updateTool(input: ToolInput): Tool
// deleteTool(id: ID!): Tool
    // getTools: [Tool]
