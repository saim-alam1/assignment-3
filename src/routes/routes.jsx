import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
