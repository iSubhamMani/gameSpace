import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHasSearchCache } from "../../utils/redux/slices/search";
import { setHasFeedCache } from "../../utils/redux/slices/feed";
import CartItem from "../../components/Cart/CartItem";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchQuery } = useSelector((store) => store.search);
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (searchQuery) dispatch(setHasSearchCache(true));
    dispatch(setHasFeedCache(true));
  }, []);

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return cartItems.length === 0 ? (
    <div className="py-6 px-4 bg-bg-secondary-clr-light dark:bg-bg-secondary-clr-dark flex justify-center flex-1">
      <p className="text-black dark:text-text-clr-primary font-medium text-lg sm:text-2xl">
        Cart empty...Add some games to your life!
      </p>
    </div>
  ) : (
    <div className="flex-1 px-4 sm:px-8 pb-8 bg-bg-secondary-clr-light dark:bg-bg-secondary-clr-dark ">
      <div className="py-8 flex gap-4">
        <button onClick={goToPreviousPage}>
          <img className="w-4 sm:w-6" src={back} alt="" />
        </button>
        <h3 className="text-lg sm:text-2xl text-black dark:text-text-clr-primary font-medium">
          Cart Details
        </h3>
      </div>
      <div className="games-container md:flex-1 gap-6 md:gap-7">
        {cartItems.map((item) => {
          return <CartItem key={item.id} game={item} />;
        })}
      </div>
    </div>
  );
};

export default CartDetails;
