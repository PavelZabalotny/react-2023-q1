import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes/router";
import Loading from "./components/Loading/Loading";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
