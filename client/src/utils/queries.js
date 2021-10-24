import { gql } from '@apollo/client';

export const QUERY_ALBUMS = gql`
query{
    albums {
      _id
      title
      artist
      description
      image
      price
      quantity
      ratings
    }
  }
`;

export const QUERY_ALBUM = gql`
query album ($id: ID!) {
    album(_id: $id) {
      title
      artist
      description
      image
      price
      quantity
      ratings
    }
  }
`;