import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />},
      { path: 'shop', element: <Shop />},
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);