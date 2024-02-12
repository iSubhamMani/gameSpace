import genreData from "../../utils/genreData";
import LazyImage from "../LazyImage/LazyImage";

const DiscoverGames = () => {
  return (
    <div className="mt-4">
      <div>
        <p className="text-primary-text-color-light dark:text-white text-[1.75rem] sm:text-4xl md:text-5xl font-semibold">
          Search for your favourite games
        </p>
      </div>
      <div className="my-6 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-[2] flex-col gap-3">
            <div className="sm:h-[360px] flex flex-col md:flex-row gap-3">
              <div className="rounded-lg overflow-hidden relative">
                <div className="h-full opacity-[60%]">
                  <LazyImage img={genreData[0].imageUrl} />
                </div>
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Action
                </button>
              </div>
              <div className="rounded-lg overflow-hidden relative">
                <div className="h-full opacity-[60%]">
                  <LazyImage img={genreData[3].imageUrl} />
                </div>
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  RPG
                </button>
              </div>
            </div>
            <div className="sm:h-[360px] flex flex-col md:flex-row gap-3">
              <div className="rounded-lg overflow-hidden relative">
                <div className="h-full opacity-[60%]">
                  <LazyImage img={genreData[1].imageUrl} />
                </div>
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Indie
                </button>
              </div>
              <div className="rounded-lg overflow-hidden relative">
                <div className="h-full opacity-[60%]">
                  <LazyImage img={genreData[4].imageUrl} />
                </div>
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Shooter
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[200px] sm:h-[336px] md:h-[732px] rounded-lg overflow-hidden relative">
              <div className="h-full opacity-[60%]">
                <LazyImage img={genreData[2].imageUrl} />
              </div>
              <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                Adventure
              </button>
            </div>
          </div>
        </div>
        <div className="h-[150px] sm:h-[250px] rounded-lg overflow-hidden relative">
          <div className="h-full opacity-[60%]">
            <LazyImage img={genreData[5].imageUrl} />
          </div>
          <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
            And more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverGames;
