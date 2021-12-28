import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import "./Icons.css";

/** Show add/remove cart icons
 *
 * Dispatches add/remove actions.
 *
 * ProductList -> CartIcons
 * ProductDetails -> CartIcons
 *
 */

function Icons({ id }) {
  const dispatch = useDispatch();

  function add(evt) { dispatch(addToCart(id)); }
  function remove(evt) { dispatch(removeFromCart(id)); }

  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={add}
        className="CartIcon fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={remove}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
}

export default Icons;
