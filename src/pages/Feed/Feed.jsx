import { useCallback, useRef } from "react";
import Game from "../../components/Game/Game";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber } from "../../utils/redux/slices/feed";
import ShimmerLoading from "../../components/Shimmer/ShimmerLoading";
import useGameFeed from "../../hooks/useGameFeed";

const Feed = () => {
  const dispatch = useDispatch();
  const observer = useRef();

  const { results, pageNumber, hasMore } = useSelector((store) => store.feed);

  const { loading, error } = useGameFeed(pageNumber);

  const lastGameElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(updatePageNumber());
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="games-container md:flex-1 gap-6 md:gap-7">
      {results?.map((game, index) => {
        if (results.length === index + 1) {
          return (
            <div key={game?.id} ref={lastGameElementRef}>
              <Game game={game} />
            </div>
          );
        }
        return (
          <div key={game?.id}>
            <Game game={game} />
          </div>
        );
      })}
      {loading && <ShimmerLoading />}
    </div>
  );
};

export default Feed;
