import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Authentication from "../Pages/Authentication/Authentication";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import LeftSide from "../Pages/Courses/LeftSide";
import About from "../Pages/Courses/RightSide/About";
import Faq from "../Pages/Courses/RightSide/Faq";
import MyCourses from "../Pages/Courses/RightSide/MyCourses";
import Payment from "../Pages/Courses/RightSide/Payment";
import Profile from "../Pages/Courses/RightSide/Profile";
import SingleCourse from "../Pages/Courses/RightSide/SingleCourse";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home"
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Authentication />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://education-server-sooty.vercel.app/courses/${params.id}`)
                },
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
            },
            {
                path: '/course/:id',
                loader: async ({ params }) => {
                    return fetch(`https://education-server-sooty.vercel.app/courses/${params.id}`)
                },
                element: <SingleCourse></SingleCourse>
            },
            {
                path: '/category/:id',
                element: <LeftSide></LeftSide>,
                loader: ({ params }) => fetch(`https://education-server-sooty.vercel.app/categories/${params.id}`)
            },

            {
                path: '/courses',
                element: <Courses />,

                children: [
                    {
                        index: true,
                        loader: () => fetch('https://education-server-sooty.vercel.app/courses'),

                        element: <MyCourses />,

                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'about',
                        element: <About />
                    },
                    {
                        path: 'payment',
                        element: <Payment />
                    },
                ]
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])