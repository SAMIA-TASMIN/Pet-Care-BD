import React from 'react';
import { createBrowserRouter } from "react-router";
import Error from '../Components/Error'
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Amne from '../Pages/Amne';
import Services from '../Pages/Services';
const router =  createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        Component:Home,
        loader:()=>fetch('data.json')
      },
      {
        path:"/amne",
        Component:Services
      }
    ]
  },
]);

export default router;