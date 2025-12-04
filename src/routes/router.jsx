import React from 'react';
import { createBrowserRouter } from "react-router-dom"; 
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
    element: <Root />, 
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/data.json') 
      },
      {
        path: "services", 
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