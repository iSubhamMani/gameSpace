import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addResults,
  setHasFeedCache,
  setHasMore,
} from "../utils/redux/slices/feedResults";

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
        dispatch(setHasMore(res?.data?.results.length > 0));
        setLoading(false);
      }
    } catch (e) {
      if (axios.isCancel(e)) return;
      setError(true);
    }
  };
  return { loading, error };
};

export default useGameFeed;
