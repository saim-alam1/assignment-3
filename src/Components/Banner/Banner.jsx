import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      {/* Text Container */}
      <div className="text-center w-[80%] mx-auto mt-20 mb-10">
        <h1 className="text-5xl font-black text-[#2f2f2f] mb-4">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button className="btn h-auto hover:shadow-lg transition-all duration-300 bg-transparent ease-in-out py-2 px-6">
          <img src={playStore} alt="Play Store Image" className="w-8 mr-2" />
          Google Play
        </button>
        <button className="btn h-auto hover:shadow-lg transition-all duration-300 bg-transparent py-2 px-6 ease-in-out">
          <img src={appStore} alt="App Store Image" className="w-8 mr-2" />
          App Store
        </button>
      </div>

      {/* Big Image */}
      <div className="mx-auto flex items-center justify-center mt-10">
        <img src={bannerImg} alt="Banner Image" className="w-87.5 md:w-175" />
      </div>
    </div>
  );
};

export default Banner;
