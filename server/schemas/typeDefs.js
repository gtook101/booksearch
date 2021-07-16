const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: [String]!
    bookCount: String
    savedBooks: [String]!
  }

  type Query {
    me: User
  }

  type Mutation {
    logIn(email: String!, password: String!): Auth
    addUser(username: String, email: String!, password: String!): Auth
    saveBook(
      author: String
      description: String
      title: String
      bookId: String
      image: String
      link: String
    ): User
    removeBook(bookId: String): User
  }

  type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: String
    user: String
  }
`;

module.exports = typeDefs;
