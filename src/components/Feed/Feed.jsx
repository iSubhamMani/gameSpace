import { useEffect, useState } from "react";
import { FEED_API_URL } from "../../utils/constants";
import Game from "../Game/Game";
import { useDispatch, useSelector } from "react-redux";
import { addResults } from "../../utils/redux/slices/feedResults";
import ShimmerLoading from "../Shimmer/ShimmerLoading";

const Feed = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const feedResults = useSelector((store) => store.feed?.results);

  useEffect(() => {
    fetchFeed();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPageNumber((prev) => prev + 1);
    }
  };

  const fetchFeed = async () => {
    try {
      const response = await fetch(FEED_API_URL + `&page=${pageNumber}`);
      const data = await response.json();

      if (data) {
        // Update store
        dispatch(addResults(data?.results));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="games-container md:flex-1 gap-6">
      {feedResults?.map((game) => (
        <Game key={game?.id} game={game} />
      ))}
      {loading && <ShimmerLoading />}
    </div>
  );
};

export default Feed;
