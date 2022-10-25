import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])