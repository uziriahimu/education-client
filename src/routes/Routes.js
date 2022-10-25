import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Faq from "../pages/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/course',
                element: <Courses></Courses>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])