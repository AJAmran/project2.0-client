import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import Blog from "../../pages/Blog/Blog";
import AddToys from "../../pages/Toys/AddToys";
import AllToys from "../../pages/Toys/AllToys";
import MyToys from "../../pages/Toys/MyToys";

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
        element: <AddToys></AddToys>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>
      }
    ],
  },
]);

export default router;
