import genreData from "../../utils/genreData";

const DiscoverGames = () => {
  return (
    <div className="mt-[50px]">
      <div>
        <p className="text-primary-text-color-light dark:text-white text-[1.75rem] sm:text-4xl md:text-5xl font-semibold">
          Discover games based on genres
        </p>
      </div>
      <div className="my-6 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-[2] flex-col gap-3">
            <div className="sm:h-[360px] flex flex-col md:flex-row gap-3">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  className="object-cover w-full h-full brightness-[0.5] dark:brightness-[0.6]"
                  src={genreData[0].imageUrl}
                  alt=""
                />
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Action
                </button>
              </div>
              <div className="rounded-lg overflow-hidden relative">
                <img
                  className="object-cover w-full h-full brightness-[0.5] dark:brightness-[0.6]"
                  src={genreData[3].imageUrl}
                  alt=""
                />
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  RPG
                </button>
              </div>
            </div>
            <div className="sm:h-[360px] flex flex-col md:flex-row gap-3">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  className="object-cover w-full h-full brightness-[0.5] dark:brightness-[0.6]"
                  src={genreData[1].imageUrl}
                  alt=""
                />
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Indie
                </button>
              </div>
              <div className="rounded-lg overflow-hidden relative">
                <img
                  className="object-cover w-full h-full brightness-[0.5] dark:brightness-[0.6]"
                  src={genreData[4].imageUrl}
                  alt=""
                />
                <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                  Shooter
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[200px] sm:h-[336px] md:h-[732px] rounded-lg overflow-hidden relative">
              <img
                className="object-cover w-full h-full brightness-[0.5] dark:brightness-[0.6]"
                src={genreData[2].imageUrl}
                alt=""
              />
              <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
                Adventure
              </button>
            </div>
          </div>
        </div>
        <div className="h-[150px] sm:h-[250px] rounded-lg overflow-hidden relative">
          <img
            className="w-full h-full object-cover brightness-[0.5] dark:brightness-[0.6]"
            src={genreData[5].imageUrl}
            alt=""
          />
          <button className="hover:text-primary-text-color transition duration-300 ease-in-out absolute cursor-default inset-0 m-auto text-white font-bold text-lg">
            And more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverGames;
