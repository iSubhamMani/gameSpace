import star from "../../assets/star.png";

const Game = ({ game }) => {
  const platforms = [];
  const genres = [];

  game?.platforms?.map((platform) => platforms.push(platform.platform?.name));
  game?.genres?.map((genre) => genres.push(genre.name));

  return (
    <div
      className="bg-[#f8f8f8] shadow-md dark:shadow-2xl dark:bg-primary-color-dark rounded-md overflow-hidden
    border-b-4 border-b-primary-text-color"
    >
      <div className="h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={game?.background_image}
          alt=""
        />
      </div>
      <div className="px-5 py-4 flex flex-col gap-6">
        <h3 className="text-black dark:text-white font-bold text-xl line-clamp-1">
          {game?.name}
        </h3>

        <div className="flex flex-col gap-3">
          <div className="dark:text-white font-medium text-sm line-clamp-1">
            <p>{platforms.join(", ")}</p>
          </div>
          <div className="dark:text-white font-medium text-sm line-clamp-1">
            <p>{genres.join(", ")}</p>
          </div>
          <div className="dark:text-white font-bold text-sm flex gap-1 items-center">
            <span>{game?.rating}</span>
            <img src={star} className="w-[0.9rem]" alt="" />
            <span>( {game?.ratings_count} ratings )</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm sm:text-[1rem] whitespace-nowrap text-primary-text-color hover:text-white font-bold border-2 border-primary-text-color rounded-full hover:bg-primary-text-color transition duration-200 ease-in-out">
            More info
          </button>
          <button className="px-4 py-2 text-sm sm:text-[1rem] whitespace-nowrap text-accent-color hover:text-white font-extrabold border-2 border-accent-color rounded-full hover:bg-accent-color transition duration-200 ease-in-out">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
