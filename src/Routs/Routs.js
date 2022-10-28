import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/blog/Blog";
import Chemistry from "../Components/Courses/Chemistry";
import Courses from "../Components/Courses/Courses";
import ICT from "../Components/Courses/ICT";
import Math from "../Components/Courses/Math";
import Physics from "../Components/Courses/Physics";
import ProLanguar from "../Components/Courses/ProLanguar";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";

import Registration from "../Components/Registration/Registration";
import Login from "../Components/Signin/Login";
import Them from "../Components/Them/Them";

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
                path: 'faq',
                element: <Privateroute> <FAQ></FAQ></Privateroute>
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
                path: 'them',
                element: <Them></Them>
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
                path: '/Courses/ICT',
                element: <ICT></ICT>
            },
            {
                path: '/Courses/Programming Language',
                element: <ProLanguar></ProLanguar>
            },
            {
                path: '/Courses/Chemistry',
                element: <Chemistry></Chemistry>
            }


        ]

    },

])