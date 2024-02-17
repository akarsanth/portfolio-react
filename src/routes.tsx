import { createBrowserRouter } from "react-router-dom";
import Card from "./Components/Card/Card";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    children: [
      {
        path: "/",
        element: <About />,
      },

      {
        path: "/projects",
        element: <About />,
      },

      {
        path: "/skills",
        element: <Skills />,
      },

      {
        path: "/education",
        element: <Education />, // Add college and Internship
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
