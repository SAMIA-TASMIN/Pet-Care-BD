import React from 'react';
import { createBrowserRouter } from "react-router-dom"; // এটা change করো
import Error from '../Components/Error'
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import LogInPage from '../Pages/LogInPage';
import Register from '../Pages/Register';
import ServiceDetails from '../Pages/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Component এর বদলে element ব্যবহার করো
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/data.json') // শুরুতে / দাও
      },
      {
        path: "services", // শুরুতে / দিও না
        loader: () => fetch('/data.json'),
        element: <Services />
      },
      {
        path: 'service/:id',
        loader: () => fetch('/data.json'),
        element: <ServiceDetails />
      },
      {
        path: 'login',
        element: <LogInPage />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
]);

export default router;