import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/blog/Blog";
import Chemistry from "../Components/Courses/Chemistry";
import Courses from "../Components/Courses/Courses";
import Math from "../Components/Courses/Math";
import Physics from "../Components/Courses/Physics";
import Home from "../Components/Home/Home";
import Logout from "../Components/Logout/Logout";
import Registration from "../Components/Registration/Registration";
import Signin from "../Components/Signin/Signin";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'login',
                element: <Signin></Signin>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'logout',
                element: <Logout></Logout>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]

    },
    {
        path: 'courses',
        element: <Courses></Courses>
    },
    {
        path: 'home',
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
])