import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <footer>
        <img src="/android-chrome-192x192-nobg.png" alt="Logo" />
        <p>
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart-filled"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          by Aakarshan
        </p>
      </footer>
    </Fragment>
  );
};

export default App;
