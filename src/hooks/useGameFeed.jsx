import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addResults, setHasFeedCache } from "../utils/redux/slices/feed";

const useGameFeed = (pageNumber) => {
  const dispatch = useDispatch();
  const { hasFeedCache } = useSelector((store) => store.feed);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleCache);

    return () => {
      window.removeEventListener("scroll", handleCache);
    };
  }, []);

  useEffect(() => {
    if (hasFeedCache) return;
    else handleFeed();
  }, [pageNumber]);

  const handleCache = () => {
    dispatch(setHasFeedCache(false));
  };

  const handleFeed = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios({
        method: "GET",
        url: API_URL,
        params: { page_size: PAGINATION_OFFSET, page: pageNumber },
      });

      if (res) {
        dispatch(addResults(res?.data?.results));
        setLoading(false);
      }
    } catch (e) {
      if (e.code === "ERR_BAD_REQUEST") {
        setLoading(false);
      } else {
        setError(true);
      }
    }
  };
  return { loading, error };
};

export default useGameFeed;
