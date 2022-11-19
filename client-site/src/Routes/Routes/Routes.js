import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../LayOut/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Error from "../../Pages/Sheared/404/Error";
import Category from "../../Pages/Sheared/Category/Category";
import CourseDetails from "../../Pages/Sheared/CourseDetails/CourseDetails";
import UserProfile from "../../Pages/Sheared/UserProfile/UserProfile";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";



export const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         { path: "/", element: <Home /> },
         { path: '/login', element: <Login /> },
         { path: "/register", element: <Register /> },
         {
            path: '/courses', element: <Courses />,
            loader: () => fetch('https://server-site-two.vercel.app/category/7')
         },
         {
            path: '/category/:id', element: <Category />,
            loader: ({ params }) => fetch(`https://server-site-two.vercel.app/category/${params.id}`)
         },
         {
            path: '/course/:id', element: <CourseDetails />,
            loader: ({ params }) => fetch(`https://server-site-two.vercel.app/course/${params.id}`)
         },
         { path: '/blog', element: <Blog /> },
         { path: '/faq', element: <FAQ /> },
         { path: '/profile', element: <PrivetRoutes><UserProfile /></PrivetRoutes> },
         {
            path: '/checkOut/:id', element: <PrivetRoutes><CheckOut /></PrivetRoutes>,
            loader: ({ params }) => fetch(`https://server-site-two.vercel.app/course/${params.id}`)
         },

         // { path: "*", element: <Navigate to='/' /> },
         { path: "*", element: <Error /> },
      ],
   },
]);
