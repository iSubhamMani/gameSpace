import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setHasFeedCache } from "../utils/redux/slices/feed";
import {
  addSearchResults,
  setHasSearchCache,
  setPageNumber,
  setSearchResults,
} from "../utils/redux/slices/search";

const useGameSearch = (query, pageNumber) => {
  const { hasSearchCache } = useSelector((store) => store.search);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasFeedCache(true));

    window.addEventListener("scroll", handleCache);

    return () => {
      window.removeEventListener("scroll", handleCache);
    };
  }, []);

  useEffect(() => {
    dispatch(setPageNumber(1));
    if (hasSearchCache) return;
    dispatch(setSearchResults([]));
  }, [query]);

  useEffect(() => {
    if (hasSearchCache) return;
    handleGameSearch();
  }, [query, pageNumber]);

  const handleCache = () => {
    dispatch(setHasSearchCache(false));
  };

  const handleGameSearch = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios({
        method: "GET",
        url: API_URL,
        params: {
          page_size: PAGINATION_OFFSET,
          search: query,
          page: pageNumber,
        },
      });

      if (res) {
        dispatch(addSearchResults(res?.data.results));
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

export default useGameSearch;
