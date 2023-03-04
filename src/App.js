import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Generate from "./pages/Generate";

import Home from "./pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/generate",
    element: <Generate />,
  },
]);

function App() {
  return <RouterProvider router={Routes} />;
}
export default App;
