import React from "react";
import CartItem from "./CartItem";

import { useGlobalContext } from "../features/context";

const CartContainer = () => {
  const { cart, totalPrize, clearItems } = useGlobalContext();

  // const clearItems = () => {};

  if (cart.length < 1) {
    return (
      <section>
        <div className="empty-msg-cont">
          <h1>Your Cart</h1>
          <p>is currently empty...</p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <h1 className="ur-cart">Your Cart</h1>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className="total-cont">
        <hr />
        <div className="total-amt">
          <h3>Total</h3>
          <h3>$ {totalPrize}</h3>
        </div>
        <div className="btn-clr">
          <button type="button" onClick={() => clearItems()}>
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
