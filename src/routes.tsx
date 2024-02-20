import { createBrowserRouter } from "react-router-dom";
import Card from "./Components/Card/Card";
import Me from "./Components/Me/Me";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

export default router;
