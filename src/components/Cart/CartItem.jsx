import React from "react";
import { Trash } from "react-feather";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../utils/redux/slices/cart";
import LazyImage from "../LazyImage/LazyImage";

const CartItem = ({ game }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="bg-[#f8f8f8] shadow-2xl dark:bg-primary-color-dark rounded-t-2xl overflow-hidden
      relative"
      >
        <div className="h-[12rem] sm:h-[18rem] md:h-[20rem]">
          <LazyImage img={game?.background_image} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 px-4 pb-4 pt-2 w-full bg-gradient-to-t from-[#000] to-transparent flex gap-2 justify-between items-center">
          <h3 className="text-text-clr-primary font-bold text-lg sm:text-xl line-clamp-1">
            {game?.name}
          </h3>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(deleteCartItem(game.id))}
          className="hover:opacity-90 flex gap-2 justify-center items-center rounded-b-2xl font-bold bg-red-600 text-text-clr-primary w-full py-3"
        >
          <span>Remove from cart</span>
          <Trash width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
