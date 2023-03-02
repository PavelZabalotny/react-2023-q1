import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/Not-found";
import RootLayout from "./pages/RootLayout";
import "./main.scss";
import { About } from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
