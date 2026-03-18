import { useLoaderData } from "react-router";
import AppCard from "../Shared/AppCard/AppCard";

const Apps = () => {
  const appsData = useLoaderData();
  return (
    <section className="max-w-360 mx-auto w-full mt-20 mb-10 flex flex-col items-center">
      <h2 className="text-[#001931] md:text-5xl text-3xl text-center font-bold mb-4">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="w-full mt-10 mb-4 flex items-center justify-between">
        <h4 className="text-2xl font-semibold text-[#001931]">
          ({appsData.length}) Apps Found
        </h4>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 my-10">
        {appsData.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
    </section>
  );
};

export default Apps;
