import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import React, { lazy, Suspense } from "react";
import { RoutePaths } from "./shared/constants";
import Loading from "./shared/components/Loading/Loading";
import Home from "@/modules/common/ui/Home/Home";

const About = lazy(() => import("./pages/About/About"));
const NoMatch = lazy(() => import("./pages/NoMatch/NoMatch"));

export const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: RoutePaths.About,
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: RoutePaths.NoMatch,
        element: (
          <Suspense fallback={<Loading />}>
            <NoMatch />
          </Suspense>
        ),
      },
    ],
  },
]);
