import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/Root/Root";
import React, { lazy, Suspense } from "react";
import { RoutePaths } from "@/shared/constants";
import Loading from "@/components/Loading/Loading";
import Home from "@/components/Home/Home";

const About = lazy(() => import("@/pages/About/About"));
const Forms = lazy(() => import("@/pages/Forms/Forms"));
const NoMatch = lazy(() => import("@/pages/NoMatch/NoMatch"));

export const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <Root />,
    children: [
      {
        index: true,
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
        path: RoutePaths.Forms,
        element: (
          <Suspense fallback={<Loading />}>
            <Forms />
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
