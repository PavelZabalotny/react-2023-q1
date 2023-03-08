import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./router";
import Loading from "./shared/components/Loading/Loading";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </React.StrictMode>
  );
}

export default App;
