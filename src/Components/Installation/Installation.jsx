import { useLoaderData } from "react-router";
import {
  getStoredApp,
  removeFromLocalStorage,
} from "../../Utilities/saveAtLocalStorage";
import { TiArrowSortedDown } from "react-icons/ti";
import InstalledAppCard from "../Shared/InstalledAppCard/InstalledAppCard";
import { useState } from "react";

const Installation = () => {
  const appsData = useLoaderData();
  const installedApps = getStoredApp();

  const convertAppsIdIntoNum = installedApps.map((id) => parseInt(id));
  // console.log(convertAppsIdIntoNum);

  const getInstalledApps = appsData.filter((apps) =>
    convertAppsIdIntoNum.includes(apps.id),
  );

  const [installedAppList, setInstalledAppList] = useState(getInstalledApps);

  const handleRemoveApp = (id) => {
    removeFromLocalStorage(id);

    const remainingApps = installedAppList.filter((app) => app.id !== id);

    setInstalledAppList(remainingApps);
  };

  return (
    <section className="max-w-360 mx-auto my-20">
      <h2 className="text-[#001931] md:text-5xl text-3xl text-center font-bold mb-4">
        Your Installed Apps
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* App Length & Short Drop Down */}
      <div className="w-full mt-10 mb-4 flex flex-col md:flex-row items-center justify-between px-3 space-y-4">
        <h4 className="text-2xl font-semibold text-[#001931]">
          ({getInstalledApps.length}) Apps Found
        </h4>
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-[#627382] text-[16px]"
          >
            Sort By Size <TiArrowSortedDown className="text-xl" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content dropdown-left menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-3 flex flex-col gap-4">
        {installedAppList.map((apps) => (
          <InstalledAppCard
            key={apps.id}
            apps={apps}
            handleRemoveApp={handleRemoveApp}
          />
        ))}
      </div>
    </section>
  );
};

export default Installation;
