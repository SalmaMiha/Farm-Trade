import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ServicePage from "../Pages/ServicePage/ServicePage";
import MyServices from "../Pages/MyServices/MyServices";
import UpdateService from "../Pages/UpdateService/UpdateService";
import Details from "../Pages/Details/Details";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MySchedules from "../Pages/MySchedules/MySchedules";
//import MyWishlist from "../Pages/MyWishlist/MyWishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <ServicePage></ServicePage>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/wishlist",
      //   element: (
      //     <PrivateRoute>
      //       <MyWishlist></MyWishlist>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-schedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-order",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
