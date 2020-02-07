import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Stories {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    stories: [Stories!]!
  }
`;

export default typeDefs;
