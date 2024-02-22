import { createBrowserRouter } from "react-router-dom";
import Card from "./Components/Card/Card";
import Me from "./Components/Me/Me";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    children: [
      {
        index: true,
        element: <Me />,
      },

      {
        path: "/projects",
        element: <Project />,
      },

      {
        path: "/education",
        element: <Education />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
