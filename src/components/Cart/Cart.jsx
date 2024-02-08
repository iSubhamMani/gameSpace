import React from "react";
import { useSelector } from "react-redux";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((store) => store.user);

  return user?.userInfo ? (
    <Link to="/cart">
      <div className="hover:scale-90 transition duration-200 ease-in-out">
        <img className="w-5 sm:w-7" src={cart} alt="" />
      </div>
    </Link>
  ) : null;
};

export default Cart;
