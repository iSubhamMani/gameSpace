import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHasSearchCache } from "../../utils/redux/slices/search";
import { setHasFeedCache } from "../../utils/redux/slices/feed";
import axios from "axios";
import { GAME_DETAILS_API_URL } from "../../utils/constants";
import { ScrollRestoration, useParams } from "react-router-dom";
import metacritic from "../../assets/metacritic.png";
import star from "../../assets/favorite.png";
import about from "../../assets/about.png";
import screenshots from "../../assets/image.png";

const GameDetails = () => {
  const dispatch = useDispatch();
  const [gameDetails, setGameDetails] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    dispatch(setHasSearchCache(true));
    dispatch(setHasFeedCache(true));

    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    setLoading(true);
    setError(false);

    try {
      const res_details = await axios({
        method: "GET",
        url:
          GAME_DETAILS_API_URL + id + "?key=cf090f9bdfb545a6ba8d26e867f31526",
      });

      const res_screenshots = await axios({
        method: "GET",
        url:
          GAME_DETAILS_API_URL +
          id +
          "/screenshots?key=cf090f9bdfb545a6ba8d26e867f31526",
      });

      if (res_details) {
        setGameDetails(res_details?.data);
      }

      if (res_screenshots) {
        setGameScreenshots(res_screenshots?.data?.results);
      }

      if (res_details && res_screenshots) {
        setLoading(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="dark:bg-bg-secondary-clr-dark">
      <div className="relative h-[40vh] sm:h-[75vh]">
        <div className="h-full">
          <img
            className="brightness-[45%] w-full h-full object-cover"
            src={gameDetails?.background_image}
            alt=""
          />
        </div>
        <div className="w-full gap-2 flex flex-col sm:flex-row items-start justify-between p-4 sm:p-8 md:p-12 absolute bottom-0 left-0 bg-gradient-to-t from-bg-secondary-clr-dark to-transparent">
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
            <button
              className="px-4 py-2 sm:py-3 rounded-md bg-primary-color text-white hover:opacity-85 transition duration-200 ease-in-out font-bold sm:text-xl
            "
            >
              Purchase
            </button>
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
            <div className="text-text-clr-primary text-sm sm:text-lg md:text-xl font-bold lg:w-[70%]">
              {gameDetails?.description_raw}
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <p className="text-text-clr-primary font-bold text-sm sm:text-lg md:text-xl">
              <span className="text-primary-color">Release Date:</span>{" "}
              <span className="font-medium">{gameDetails?.released}</span>
            </p>
          </div>
          <div className="mt-1">
            <p className="text-text-clr-primary font-medium text-sm sm:text-lg md:text-xl">
              <span className="text-primary-color">Developers:</span>{" "}
              {gameDetails?.developers.map((dev) => dev.name).join(", ")}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-text-clr-primary font-medium text-sm sm:text-lg md:text-xl">
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
                <div key={gameSs?.id} className="rounded-md overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={gameSs?.image}
                    alt=""
                  />
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
