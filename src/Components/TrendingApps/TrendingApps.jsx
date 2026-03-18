import { Link } from "react-router";
import AppCard from "../Shared/AppCard/AppCard";

const TrendingApps = ({ appsData }) => {
  return (
    <section className="max-w-360 mx-auto w-full mt-20 mb-10 flex flex-col items-center">
      <h2 className="text-[#001931] md:text-5xl text-3xl text-center font-bold mb-4">
        Trending Apps
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 my-10">
        {appsData.slice(0, 8).map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>

      <Link
        to="/apps"
        className="text-[16px] font-semibold btn border-none shadow-none bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white py-5 px-10"
      >
        Show All
      </Link>
    </section>
  );
};

export default TrendingApps;
