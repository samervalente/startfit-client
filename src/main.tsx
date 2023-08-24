import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import Sheet from "./pages/sheet/index.tsx";
import WeekDay from "./pages/weekday/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ficha",
    element: <Sheet />,
  },
  {
    path: "/cronograma/:id",
    element: <WeekDay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
