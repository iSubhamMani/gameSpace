import { useState } from "react";
import Feed from "../../components/Feed/Feed";
import SearchResults from "../../components/SearchResults/SearchResults";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="px-4 sm:px-8 py-4
    dark:bg-gradient-to-l from-[#11111ff3] to-secondary-color-dark"
    >
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search games"
        className="px-6 py-2 my-8 text-lg text-primary-text-color bg-transparent border-2 border-primary-text-color rounded-full"
      />
      {searchQuery.trim() === "" ? (
        <Feed />
      ) : (
        <SearchResults searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Home;
