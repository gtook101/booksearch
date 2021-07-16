import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      userName
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userId: String!) {
    addBook(user: $user) {
      userName
      email
      password
      savedBooks
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!) {
    saveBook(book: $book) {
      author
      description
      bookId
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    saveBook(book: $book) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
