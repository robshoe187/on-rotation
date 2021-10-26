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

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        albums {
          _id
          title
          artist
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($albums: [ID]!) {
    checkout(albums: $albums) {
      session
    }
  }
`;