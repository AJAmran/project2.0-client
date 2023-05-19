import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import Blog from "../../pages/Blog/Blog";
import AddToys from "../../pages/Toys/AddToys";
import AllToys from "../../pages/Toys/AllToys";
import MyToys from "../../pages/Toys/MyToys";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SingleToys from "../../pages/Toys/SingleToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://toy-market-place-server-nine.vercel.app/alltoys')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: '/addtoys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/alltoys',
        element:<AllToys></AllToys>,
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/singleToy/:id',
        element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-market-place-server-nine.vercel.app/singleToys/${params.id}`)
      }
    ],
  },
]);

export default router;
