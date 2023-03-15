import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes/router";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </React.StrictMode>
  );
}

export default App;
