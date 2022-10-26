import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/blog/Blog";
import Chemistry from "../Components/Courses/Chemistry";
import Courses from "../Components/Courses/Courses";
import Math from "../Components/Courses/Math";
import Physics from "../Components/Courses/Physics";
import Home from "../Components/Home/Home";

import Registration from "../Components/Registration/Registration";
import Login from "../Components/Signin/Login";

import Main from "../Layout/Main";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'courses',
                element: <Privateroute><Courses></Courses></Privateroute>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Courses/Math',
                element: <Math></Math>
            },
            {
                path: '/Courses/Physics',
                element: <Physics></Physics>
            },
            {
                path: '/Courses/Chemistry',
                element: <Chemistry></Chemistry>
            }


        ]

    },

])