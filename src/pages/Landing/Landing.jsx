import Carousel from "../../components/Carousel/Carousel";
import DiscoverGames from "../../components/DiscoverGames/DiscoverGames";
import carouselData from "../../utils/carouselData";

const Landing = () => {
  return (
    <main className="px-6 py-8">
      <div className="flex flex-col items-center">
        <div className="my-2 text-center">
          <p className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold">
            Play Beyond Limits
          </p>
          <p className="text-sm sm:text-lg font-medium my-1">
            Get the most popular games at your fingertips
          </p>
        </div>
        <div className="max-w-[1152px] rounded-lg overflow-hidden">
          <Carousel>
            {carouselData.map((carousel) => (
              <img
                className="brightness-[0.8]"
                src={carousel.imageUrl}
                key={carousel.id}
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </div>
      <DiscoverGames />
    </main>
  );
};

export default Landing;
