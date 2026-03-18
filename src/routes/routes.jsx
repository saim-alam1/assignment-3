import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
