import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//1.react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//2.Import homepage
import Home from "./pages/home.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
