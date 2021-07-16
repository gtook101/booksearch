import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query allUsers {
    GET_ME {
      _id
      name
      email
      savedBooks
    }
  }
`;
