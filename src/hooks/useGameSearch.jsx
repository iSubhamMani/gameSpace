import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, PAGINATION_OFFSET } from "../utils/constants";

const useSearchGames = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setGames([]);
  }, [query]);

  useEffect(() => {
    handleGameSearch();
  }, [query, pageNumber]);

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
        setGames((prevGames) => {
          return [...prevGames, ...res?.data.results];
        });

        setHasMore(res?.data?.results.length > 0);
        setLoading(false);
      }
    } catch (e) {
      if (axios.isCancel(e)) return;
      setError(true);
    }

    return () => cancel();
  };
  return { loading, error, games, hasMore };
};

export default useSearchGames;
