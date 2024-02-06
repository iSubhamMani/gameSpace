import { useEffect, useState } from "react";
import Feed from "../../components/Feed/Feed";
import SearchResults from "../../components/SearchResults/SearchResults";
import search from "../../assets/search.png";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  useEffect(() => {
    if (searchInput.trim() === "") setSearchQuery("");
  }, [searchInput]);

  return (
    <div
      className="px-4 sm:px-8 py-4
    dark:bg-bg-secondary-clr-dark bg-bg-clr-light"
    >
      <div className="px-6 py-2 flex gap-3 justify-between w-full sm:max-w-[400px] my-8 items-center border-2 border-primary-color rounded-full">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
