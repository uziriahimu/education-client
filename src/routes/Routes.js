import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Sidebar from "../pages/Sidebar";

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
                path: '/link/:id',
                element: <Sidebar></Sidebar>,
                loader: ({ params }) => fetch(`http://localhost:5000/link/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])