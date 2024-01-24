import Feed from "../../components/Feed/Feed";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  return (
    <div
      className="px-4 sm:px-8 py-4 flex flex-col md:flex-row gap-6 justify-between
    dark:bg-gradient-to-l from-[#11111ff3] to-secondary-color-dark"
    >
      <Filter />
      <Feed />
    </div>
  );
};

export default Home;
