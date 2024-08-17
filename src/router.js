import { createBrowserRouter } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
    ],
  },
]);
