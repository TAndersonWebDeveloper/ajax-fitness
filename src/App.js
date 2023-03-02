import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Workouts from "./pages/Workouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/workouts",
        element: <Workouts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
