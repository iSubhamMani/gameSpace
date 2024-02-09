import { Link } from "react-router-dom";
import arrow from "../../assets/right-arrow.png";

const Game = ({ game }) => {
  return (
    <Link to={`/game/${game?.id}`}>
      <div
        className="game bg-[#f8f8f8] shadow-2xl dark:bg-primary-color-dark rounded-2xl overflow-hidden
    relative"
      >
        <div className="h-[12rem] sm:h-[18rem] md:h-[20rem]">
          <img
            className="w-full h-full object-cover"
            src={game?.background_image}
            alt=""
          />
        </div>

        <div className="absolute bottom-0 left-0 px-4 pb-4 pt-2 w-full bg-gradient-to-t from-[#000] to-transparent flex gap-2 justify-between items-center">
          <h3 className="text-text-clr-primary font-bold text-lg sm:text-xl line-clamp-1">
            {game?.name}
          </h3>
          <div className="w-3 sm:w-4">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;
