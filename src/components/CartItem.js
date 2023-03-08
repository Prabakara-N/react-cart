import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../features/context";

const CartItem = ({ id, title, price, img, quantity }) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <div className="cart-item" key={id}>
      <div className="img-prize-cont">
        <div className="img-cont">
          <img src={img} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="prize">${price}</p>
          <p className="remove" onClick={() => removeItem(id)}>
            Remove
          </p>
        </div>
      </div>
      <div className="up-down">
        <div className="arrow" onClick={() => increaseItem(id)}>
          <FaAngleUp />
        </div>
        <p className="amt">{quantity}</p>
        <div className="arrow arr-down" onClick={() => decreaseItem(id)}>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
