
import { createBrowserRouter } from "react-router-dom"; 
import Error from '../Components/Error'
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import LogInPage from '../Pages/LogInPage';
import Register from '../Pages/Register';
import ServiceDetails from '../Pages/ServiceDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Pages/Profile';
import UpdateProfile from "../Pages/UpdateProfile";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/data.json') ,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "services", 
        loader: () => fetch('/data.json'),
        element: <Services />,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: 'service/:id',
        loader: () => fetch('/data.json'),
        element:<PrivateRoute> <ServiceDetails /></PrivateRoute>,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: 'login',
        element: <LogInPage />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path:"profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"updateProfile",
        element:<UpdateProfile></UpdateProfile>
      }
    ]
  },
]);

export default router;