import React from "react";
import { useSelector } from "react-redux";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((store) => store.user);
  const { cartItems } = useSelector((store) => store.cart);

  return user?.userInfo ? (
    <Link to="/cart">
      <div className="hover:scale-90 transition duration-200 ease-in-out relative">
        <img className="w-5 sm:w-7" src={cart} alt="" />
        {cartItems.length === 0 ? null : (
          <span className="px-[0.3rem] py-0 sm:px-2 sm:py-[0.08rem] text-[0.6rem] sm:text-[0.8rem] rounded-full text-white font-bold bg-primary-color absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
            {cartItems.length}
          </span>
        )}
      </div>
    </Link>
  ) : null;
};

export default Cart;
