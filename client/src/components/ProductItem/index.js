import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

const ProductItem = (item) => {

  const [state, dispatch] = useStoreContext();
  
  const {
    image,
    title,
    artist,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        album: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (
    <>
        <div className="col">
          <Link to={`/album/${_id}`}>
            <img
              alt={title}
              src={`/album/${image}`}
            />
            <p>{title}</p>
          </Link>
          <ul className="list-group list-group-flush">
            <li className="list-group-item artist-name">{title}</li>
            <li className="list-group-item">{artist}</li>
            <li className="list-group-item">{quantity} {pluralize("item", quantity)} in stock</li>
            <li className="list-group-item">
              $ {price}
              <button onClick={addToCart}className="cartButton">Add to Cart</button>
            </li>
          </ul>
        </div>
    </>
  );
};

export default ProductItem;
