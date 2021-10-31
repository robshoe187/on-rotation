import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from "../components/Header";
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_ALBUMS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

const Album = () => {
  
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_ALBUMS);

  const { albums, cart } = state;

  useEffect(() => {
    // already in global store
    if (albums.length) {
      setCurrentProduct(albums.find((album) => album._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        albums: data.albums,
      });

      data.albums.forEach((album) => {
        idbPromise('albums', 'put', album);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('albums', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          albums: indexedProducts,
        });
      });
    }
  }, [albums, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        album: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
    <Header />
    <Nav />
    <div className="container pt-5">
    <div className="row">
      {currentProduct && cart ? (
        <>
        <div className ="col">
            <img src={`/album/${currentProduct.image}`}
            alt={currentProduct.title}
            key={currentProduct.id}
            />
        </div>
        <div className="col">  
            <h2>{currentProduct.artist}</h2>
            <h3>{currentProduct.album}</h3>
            <span className="price">$ {currentProduct.price}</span>
            <p className="pt-1">Rating: {currentProduct.ratings}/5</p>
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
            <p>{currentProduct.description}</p>
        </div> 
        </>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      </div>
      </div>
      <Cart />
      <Footer />
    </>
  );
  }

export default Album;
