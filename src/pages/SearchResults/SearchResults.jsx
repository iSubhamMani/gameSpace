import { useCallback, useRef } from "react";
import Game from "../../components/Game/Game";
import ShimmerLoading from "../../components/Shimmer/ShimmerLoading";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber } from "../../utils/redux/slices/search";
import useGameSearch from "../../hooks/useGameSearch";
import ContentError from "../../components/Error/ContentError";

const SearchResults = ({ searchQuery }) => {
  const observer = useRef();
  const dispatch = useDispatch();

  const { searchResults, pageNumber, hasMore } = useSelector(
    (store) => store.search
  );

  const { loading, error } = useGameSearch(searchQuery, pageNumber);

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

  return error ? (
    <div className="mt-12 bg-bg-secondary-clr-light dark:bg-bg-secondary-clr-dark flex-1 flex justify-center">
      {error && <ContentError />}
    </div>
  ) : (
    <div className="games-container md:flex-1 gap-6">
      {searchResults?.map((game, index) => {
        if (searchResults.length === index + 1) {
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

export default SearchResults;
