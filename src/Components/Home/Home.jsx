import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Statistics from "../Statistics/Statistics";
import TrendingApps from "../TrendingApps/TrendingApps";

const Home = () => {
  const appsData = useLoaderData();

  return (
    <>
      <Banner />
      <Statistics />
      <TrendingApps appsData={appsData} />
    </>
  );
};

export default Home;
