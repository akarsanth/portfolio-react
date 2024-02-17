import { createBrowserRouter } from "react-router-dom";
import Card from "./Components/Card/Card";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    children: [
      {
        path: "/about",
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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
