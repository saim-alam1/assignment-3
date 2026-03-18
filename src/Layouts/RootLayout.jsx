import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
