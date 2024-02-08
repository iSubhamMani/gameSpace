import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import DiscoverGames from "../../components/DiscoverGames/DiscoverGames";
import carouselData from "../../utils/carouselData";
import { useDispatch } from "react-redux";
import {
  setHasFeedCache,
  setHasMore,
  setPageNumber,
  setResults,
} from "../../utils/redux/slices/feed";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setResults([]));
    dispatch(setHasFeedCache(false));
    dispatch(setHasMore(false));
    dispatch(setPageNumber(1));
  }, []);

  return (
    <main className="dark:bg-gradient-to-l from-bg-primary-clr-dark to-bg-secondary-clr-dark">
      <div className="h-[210px] sm:h-[300px] relative">
        <img
          className="w-full h-full object-cover brightness-[0.4]"
          src="https://images.hdqwalls.com/download/for-honor-game-2048x1152.jpg"
          alt=""
        />
        <div className="absolute top-0 pt-[2rem] left-0 pl-[2rem] h-full bg-gradient-to-r from-black to-transparent">
          <p className="text-[2rem] text-white sm:text-5xl md:text-7xl font-semibold">
            Play Beyond <span className="text-primary-text-color">Limits</span>
          </p>
          <p className="text-[1rem] text-white sm:text-lg md:text-2xl font-medium my-1 sm:my-4">
            Get the most popular games at your fingertips
          </p>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="max-w-[1152px] min-w-[250px] rounded-lg overflow-hidden shadow-2xl">
            <Carousel>
              {carouselData.map((carousel) => (
                <img
                  className="brightness-[0.8]"
                  src={carousel.imageUrl}
                  key={carousel.id}
                  alt=""
                />
              ))}
            </Carousel>
          </div>
        </div>
        <DiscoverGames />
      </div>
    </main>
  );
};

export default Landing;
