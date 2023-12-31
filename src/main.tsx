import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import WeekDay from "./pages/weekday/index.tsx";
import Meal from "./pages/meal/meal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cronograma/:weekday",
    element: <WeekDay />,
  },
  {
    path: "/cronograma/:weekday/:meal",
    element: <Meal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
