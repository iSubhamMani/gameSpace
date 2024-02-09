import { useEffect, useState } from "react";
import { setHasSearchCache } from "../utils/redux/slices/search";
import { setHasFeedCache } from "../utils/redux/slices/feed";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GAME_DETAILS_API_URL } from "../utils/constants";
import axios from "axios";
import getPrice from "../utils/getPrice";

const useGameDetails = () => {
  const dispatch = useDispatch();
  const [gameDetails, setGameDetails] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { searchQuery } = useSelector((store) => store.search);

  const { id } = useParams();

  useEffect(() => {
    setPrice(getPrice(gameDetails?.rating));
  }, [gameDetails]);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (searchQuery) dispatch(setHasSearchCache(true));
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

  return { gameDetails, gameScreenshots, loading, error, price };
};

export default useGameDetails;
