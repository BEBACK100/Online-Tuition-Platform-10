import { createBrowserRouter } from "react-router-dom";
import Chemistry from "../Components/Courses/Chemistry";
import Courses from "../Components/Courses/Courses";
import Math from "../Components/Courses/Math";
import Physics from "../Components/Courses/Physics";
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
        path: 'Math',
        element: <Math></Math>
    },
    {
        path: 'Physics',
        element: <Physics></Physics>
    },
    {
        path: 'Chemistry',
        element: <Chemistry></Chemistry>
    }
])