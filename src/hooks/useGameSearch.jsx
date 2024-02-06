import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setHasFeedCache } from "../utils/redux/slices/feedResults";
import {
  addSearchResults,
  setHasMore,
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

    let cancel;

    try {
      const res = await axios({
        method: "GET",
        url: API_URL,
        params: {
          page_size: PAGINATION_OFFSET,
          search: query,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      });

      if (res) {
        dispatch(addSearchResults(res?.data.results));
        dispatch(setHasMore(res?.data?.results.length > 0));
        setLoading(false);
      }
    } catch (e) {
      if (axios.isCancel(e)) return;
      setError(true);
    }

    return () => cancel();
  };
  return { loading, error };
};

export default useGameSearch;
