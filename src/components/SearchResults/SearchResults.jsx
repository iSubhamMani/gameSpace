import { useCallback, useRef, useState } from "react";
import useSearchGames from "../../hooks/useGameSearch";
import Game from "../Game/Game";
import ShimmerLoading from "../Shimmer/ShimmerLoading";

const SearchResults = ({ searchQuery }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  const { loading, error, games, hasMore } = useSearchGames(
    searchQuery,
    pageNumber
  );

  const lastGameElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="games-container md:flex-1 gap-6">
      {games?.map((game, index) => {
        if (games.length === index + 1) {
          return (
            <div ref={lastGameElementRef}>
              <Game key={game?.id} game={game} />
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

export default SearchResults;
