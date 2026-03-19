import { useLoaderData } from "react-router";
import AppCard from "../Shared/AppCard/AppCard";
import { useState } from "react";
import AppNotFound from "../Shared/Error/AppNotFound/AppNotFound";

const Apps = () => {
  const appsData = useLoaderData();
  const [searchedApps, setSearchedApps] = useState("");
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchedApps.toLowerCase()),
  );

  return (
    <section className="max-w-360 mx-auto w-full mt-20 mb-10 flex flex-col items-center">
      <h2 className="text-[#001931] md:text-5xl text-3xl text-center font-bold mb-4">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="w-full mt-10 mb-4 flex flex-col md:flex-row items-center justify-between px-3 space-y-4">
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
          <input
            type="search"
            onChange={(e) => setSearchedApps(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2.5 my-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))
        ) : (
          <div className="col-span-4">
            <AppNotFound />
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
