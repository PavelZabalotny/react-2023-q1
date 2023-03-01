import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/Not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
