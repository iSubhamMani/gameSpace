import metacritic from "../../assets/metacritic.png";
import star from "../../assets/favorite.png";
import about from "../../assets/about.png";
import screenshots from "../../assets/image.png";
import Loader from "../Loader/Loader";
import useGameDetails from "../../hooks/useGameDetails";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../../utils/redux/slices/cart";
import { useEffect, useState } from "react";
import { Check } from "react-feather";
import LazyImage from "../LazyImage";

const GameDetails = () => {
  const { gameDetails, gameScreenshots, loading, error, price } =
    useGameDetails();

  const { cartItems } = useSelector((store) => store.cart);

  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setInCart(cartItems.some((item) => item.id === gameDetails?.id));
  }, [cartItems, gameDetails]);

  const addItemToCart = () => {
    dispatch(
      addCartItems({
        id: gameDetails?.id,
        name: gameDetails?.name,
        price: price,
        background_image: gameDetails?.background_image,
      })
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-bg-secondary-clr-light dark:bg-bg-secondary-clr-dark flex-1">
      <div className="relative h-[40vh] sm:h-[75vh]">
        <div className="h-full brightness-[45%]">
          <LazyImage img={gameDetails?.background_image} />
        </div>
        <div className="w-full gap-2 flex flex-col sm:flex-row items-start justify-between p-4 sm:p-8 md:p-12 absolute bottom-0 left-0 bg-gradient-to-t from-bg-secondary-clr-light dark:from-bg-secondary-clr-dark to-transparent">
          <div>
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl text-text-clr-primary font-extrabold">
                {gameDetails?.name}
              </h3>
              <p className="text-sm sm:text-lg sm:mt-2 text-text-clr-primary font-light">
                Published by{" "}
                <span className="font-bold">
                  {gameDetails?.publishers[0]?.name}
                </span>
              </p>
            </div>
            <div className="my-2 sm:mt-6 flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5 sm:w-8 sm:h-8"
                  src={metacritic}
                  alt=""
                />
                <span className="text-text-clr-primary font-bold text-sm sm:text-xl">
                  {gameDetails?.metacritic}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-5 h-5 sm:w-8 sm:h-8" src={star} alt="" />
                <span className="text-text-clr-primary font-bold text-sm sm:text-xl">
                  {gameDetails?.rating}/5
                </span>
              </div>
            </div>
          </div>
          <div>
            {inCart ? (
              <button className="px-4 py-2 sm:py-3 flex gap-1 items-start sm:gap-2 rounded-md bg-primary-color hover:cursor-default text-white font-bold sm:text-xl">
                <span>Added to cart</span>
                <Check />
              </button>
            ) : (
              <button
                onClick={addItemToCart}
                className="px-4 py-2 sm:py-3 flex gap-1 items-start sm:gap-2 rounded-md bg-primary-color text-white hover:scale-95 hover:opacity-85 transition duration-200 ease-in-out font-bold sm:text-xl
            "
              >
                <span>Buy</span>
                <span>${price}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-8 md:p-12 ">
        <div>
          <div>
            <div className="w-max flex items-end gap-2 my-4 pb-2 border-b-2 border-primary-color">
              <img className="w-5 h-5 sm:w-8 sm:h-8" src={about} alt="" />
              <span className="text-sm sm:text-lg md:text-xl font-bold text-primary-color">
                Description
              </span>
            </div>
            <div className="text-black dark:text-text-clr-primary text-sm sm:text-lg md:text-xl font-bold lg:w-[70%]">
              {gameDetails?.description_raw}
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <p className="text-black dark:text-text-clr-primary font-bold text-sm sm:text-lg md:text-xl">
              <span className="text-primary-color">Release Date:</span>{" "}
              <span className="font-medium">{gameDetails?.released}</span>
            </p>
          </div>
          <div className="mt-1">
            <p className="text-black dark:text-text-clr-primary font-medium text-sm sm:text-lg md:text-xl">
              <span className="text-primary-color">Developers:</span>{" "}
              {gameDetails?.developers.map((dev) => dev.name).join(", ")}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-black dark:text-text-clr-primary font-medium text-sm sm:text-lg md:text-xl">
              <span className="text-primary-color">Genres:</span>{" "}
              {gameDetails?.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <div>
          <div className="w-max flex items-end gap-2 mt-6 mb-4 sm:mt-10 pb-2 border-b-2 border-primary-color">
            <img className="w-5 h-5 sm:w-8 sm:h-8" src={screenshots} alt="" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-primary-color">
              Screenshots
            </span>
          </div>
          <div className="game_screenshots">
            {gameScreenshots?.map((gameSs) => {
              return (
                <div
                  key={gameSs?.id}
                  className="rounded-md overflow-hidden shadow-md"
                >
                  <LazyImage img={gameSs?.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
