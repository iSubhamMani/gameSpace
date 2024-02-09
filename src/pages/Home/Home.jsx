import Feed from "../../components/Feed/Feed";
import SearchResults from "../../components/SearchResults/SearchResults";
import search from "../../assets/search.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../utils/redux/slices/search";

const Home = () => {
  const { searchQuery } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const handleSearch = () => {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value;

    dispatch(setSearchQuery(searchText));
  };

  const handleEmptySearch = (e) => {
    if (e.target.value === "") dispatch(setSearchQuery(""));
  };

  return (
    <div
      className="px-4 sm:px-8 py-4 bg-bg-secondary-clr-light
    dark:bg-bg-secondary-clr-dark bg-bg-clr-light"
    >
      <div className="px-6 py-2 flex gap-3 justify-between w-full sm:max-w-[400px] my-8 items-center border-2 border-primary-color rounded-full">
        <input
          id="search-input"
          type="text"
          defaultValue={searchQuery}
          onChange={(e) => handleEmptySearch(e)}
          placeholder="Search games"
          className="w-[80%] bg-transparent text-lg text-primary-color focus:outline-none"
        />
        <div onClick={handleSearch} className="w-[10%] hover:cursor-pointer">
          <img src={search} className="w-4 sm:w-5" alt="" />
        </div>
      </div>

      {searchQuery.trim() === "" ? (
        <Feed />
      ) : (
        <SearchResults searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Home;
