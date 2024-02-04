import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addResults, setHasMore } from "../utils/redux/slices/feedResults";

const useGameFeed = (pageNumber) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleFeed();
  }, [pageNumber]);

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
