import { gql } from '@apollo/client';

export const QUERY_ALBUMS = gql`
  query getAlbums($category: ID) {
    albums(category: $category) {
      _id
      title
      artist
      description
      price
      quantity
      image
      category {
        _id
      }
      ratings
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

export const QUERY_ALL_ALBUMS = gql`
{
  albums {
    _id
    title
    artist
    description
    image
    price
    quantity
    category {
      name
    }
    ratings
  }
}
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
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
          category {
            _id
          }
          ratings
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