import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";
import AppDetails from "../Components/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
