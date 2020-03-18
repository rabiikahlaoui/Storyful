import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type Stories {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    id: ID!
    user: User!
    createdAt: Date!
    expiresAt: Date!
  }

  type Query {
    stories: [Stories!]!
  }

  type Mutation {
    createUser (email: String!, password: String!): User!
    createUserSession (email: String!, password: String!): UserSession!
  }
`;

export default typeDefs;
