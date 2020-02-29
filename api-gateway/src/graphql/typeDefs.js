import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Stories {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
  }

  type Query {
    stories: [Stories!]!
  }

  type Mutation {
    createUser (email: String!, password: String!): User!
  }
`;

export default typeDefs;
