import AppCard from "../Shared/AppCard/AppCard";

const TrendingApps = ({ appsData }) => {
  return (
    <section className="max-w-360 mx-auto w-full mt-20 mb-10">
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
    </section>
  );
};

export default TrendingApps;
