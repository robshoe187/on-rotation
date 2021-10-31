import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALBUMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALBUMS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        albums: data.albums,
      });
      data.albums.forEach((album) => {
        idbPromise('albums', 'put', album);
      });
    } else if (!loading) {
      idbPromise('albums', 'get').then((albums) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          albums: albums,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.albums;
    }

    return state.albums.filter(
      (album) => album.category._id === currentCategory
    );
  }

  return (
    <div className="container pt-5">
      <h2>Products:</h2>
      {state.albums.length ? (
        <div className="row">
          {filterProducts().map((product) => (
            <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            title={product.title}
            artist={product.artist}
            price={product.price}
            quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>No Products Available</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
