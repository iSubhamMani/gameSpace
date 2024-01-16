import Carousel from "../../components/Carousel/Carousel";
import carouselData from "../../utils/carouselData";

const Landing = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex justify-center items-center">
        <div className="max-w-[1280px] rounded-lg overflow-hidden">
          <Carousel>
            {carouselData.map((carousel) => (
              <img src={carousel.imageUrl} key={carousel.id} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Landing;
