import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./dark.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FullStory from "./Components/fullStory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:populationId",
    element: <FullStory />,
  },
  {
    path: "*",
    element: "page not found",
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
