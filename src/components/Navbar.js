import React from "react";
import { useGlobalContext } from "../features/context";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { totalQuantity } = useGlobalContext();
  return (
    <nav>
      <div className="nav-cont">
        <h2>React Cart</h2>
        <div className="cart-icon">
          <FaShoppingCart className="cart" />
          <p>{totalQuantity}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
