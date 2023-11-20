import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routers/App';
import ErrorPage from './ErrorPage';
import HomePage from './routers/HomePage';
import DriftPage from './routers/DriftPage';
import TimeAttackPage from './routers/TimeAttackPage';
import ForzaPage from './routers/ForzaPage';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: '/drift',
            element: <DriftPage />
          },
          {
            path: '/timeattack',
            element: <TimeAttackPage />
          },
          {
            path: '/forza',
            element: <ForzaPage />
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
