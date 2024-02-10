import { useEffect } from "react";
import DiscoverGames from "../../components/DiscoverGames/DiscoverGames";
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
      <div className="h-[260px] sm:h-[400px] lg:h-[600px] relative">
        <img
          className="w-full h-full object-cover brightness-[0.4]"
          src="https://r4.wallpaperflare.com/wallpaper/589/37/106/red-dead-3-rockstar-games-red-dead-redemption-2-red-dead-redemption-wallpaper-d960a8bd112aeddba697983f305166cd.jpg"
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
        <DiscoverGames />
      </div>
    </main>
  );
};

export default Landing;
