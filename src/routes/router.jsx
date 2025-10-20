import { createBrowserRouter } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "all-projects", Component: AllProjects },
    ],
  },
]);

export default router;
