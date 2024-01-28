import { useEffect, useState } from "react";
import { FEED_API_URL } from "../../utils/constants";
import Game from "../Game/Game";
import { useDispatch, useSelector } from "react-redux";
import {
  addResults,
  setNextPage,
  updatePageNumber,
} from "../../utils/redux/slices/feedResults";
import ShimmerLoading from "../Shimmer/ShimmerLoading";

const Feed = () => {
  const pageNumber = useSelector((store) => store.feed?.pageNumber);
  const feedResults = useSelector((store) => store.feed?.results);
  const nextPage = useSelector((store) => store.feed?.nextPage);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nextPage) {
      fetchFeed();
    }
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
      dispatch(updatePageNumber());
    }
  };

  const fetchFeed = async () => {
    try {
      const response = await fetch(FEED_API_URL + `&page=${pageNumber}`);
      const data = await response.json();

      if (data) {
        // Update store
        dispatch(setNextPage(data?.next));
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
