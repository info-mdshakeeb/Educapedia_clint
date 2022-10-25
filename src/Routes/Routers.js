import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Checkout from "../Components/Checkout";
import CourseDetail from "../Components/CourseDetail";
import Courses from "../Components/Courses";
import FAQ from "../Components/FAQ";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Layout from "../Layout/Layout";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <p>Worng route</p>,
        children: [
            { path: '/', element: <Courses /> },
            { path: '/courses', element: <Courses />, },
            { path: '/faq', element: <FAQ /> },
            { path: '/blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/courses/:id',
                element: <CourseDetail />,
                loader: ({ params }) => fetch(`http://localhost:1100/courses/${params.id}`)
            },
            { path: '/checkout', element: <PrivateRoutes><Checkout></Checkout> </PrivateRoutes> },
        ]
    },
])