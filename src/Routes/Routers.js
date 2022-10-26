import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Checkout from "../Components/Checkout";
import CourseDetail from "../Components/CourseDetail";
import Courses from "../Components/Courses";
import Error from "../Components/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Layout from "../Layout/Layout";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/courses', element: <Courses />, },
            { path: '/blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/courses/:id',
                element: <CourseDetail />,
                loader: ({ params }) => fetch(`https://educapedia-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://educapedia-server-site.vercel.app/courses/${params.id}`)
            },
        ]
    },
    { path: '*', element: <Error></Error> }
])